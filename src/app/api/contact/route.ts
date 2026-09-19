import { NextRequest, NextResponse } from "next/server";

/**
 * Server-side contact submission.
 *
 * The Web3Forms key is read here, at runtime, from WEB3FORMS_KEY — note the
 * absence of a NEXT_PUBLIC_ prefix. It is never sent to the browser and never
 * inlined into the bundle, so it is a real secret: rotating it needs a restart,
 * not a rebuild.
 *
 * Doing the submit server-side is also the only way to rate-limit it or to
 * enforce the honeypot, neither of which a client-side form can do.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const LIMITS = { name: 100, email: 254, message: 5000 };

// Per-instance sliding window. The origin is a single Node server, so an
// in-memory counter is sufficient; it resets on restart and does not
// coordinate across instances. If the origin is ever scaled out, move this to
// Redis — an in-memory limit across N instances is an N-times-weaker limit.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_TRACKED_IPS = 10_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Bound memory: drop entries whose window has fully expired.
  if (hits.size > MAX_TRACKED_IPS) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

function clientIp(req: NextRequest): string {
  // Cloudflare sits in front of this origin.
  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function isNonEmptyString(value: unknown, max: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    console.error("WEB3FORMS_KEY is not set — the contact form cannot submit. See .env.example.");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  if (isRateLimited(clientIp(req))) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, email, message, botcheck } = (body ?? {}) as Record<string, unknown>;

  // Honeypot. Answer 200 so the bot has no signal that it was caught, and
  // send nothing onward.
  if (botcheck) {
    return NextResponse.json({ ok: true });
  }

  if (
    !isNonEmptyString(name, LIMITS.name) ||
    !isNonEmptyString(email, LIMITS.email) ||
    !isNonEmptyString(message, LIMITS.message) ||
    !looksLikeEmail(email)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: "New enquiry from hftconsultancy.com",
        from_name: "HFT Consultancy website",
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Web3Forms responded ${response.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    // The upstream error stays here. The browser gets a status code and
    // nothing else.
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
