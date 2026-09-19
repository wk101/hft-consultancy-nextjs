import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const DESCRIPTION =
  "Engineering consultancy for high-frequency trading and digital-asset infrastructure. Venue-certified FIX and market-data connectivity, FPGA and kernel-bypass fast paths, colocation buildout, exchange and custody systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hftconsultancy.com"),
  title: "Ultra-Low-Latency Trading Systems | HFT Consultancy",
  description: DESCRIPTION,
  keywords: [
    "high-frequency trading",
    "ultra-low latency",
    "FIX protocol",
    "FIX 4.4 certification",
    "ITCH market data",
    "market data handler",
    "FPGA trading",
    "kernel bypass",
    "colocation",
    "latency optimisation",
    "matching engine",
    "exchange infrastructure",
    "digital asset custody",
    "smart contract review",
    "trading systems consultancy",
  ],
  alternates: {
    canonical: "https://hftconsultancy.com",
  },
  openGraph: {
    title: "HFT Consultancy — Ultra-Low-Latency Trading Systems",
    description: DESCRIPTION,
    type: "website",
    url: "https://hftconsultancy.com",
    images: ["/og-image.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HFT Consultancy — Ultra-Low-Latency Trading Systems",
    description:
      "Trading infrastructure engineering: venue connectivity, fast-path hardware, colocation, exchange and custody systems.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HFT Consultancy",
  url: "https://hftconsultancy.com",
  logo: "https://hftconsultancy.com/favicon.ico",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ave. Tiradentes esq",
    addressLocality: "Santo Domingo",
    postalCode: "10124",
    addressCountry: "DO",
  },
  sameAs: [
    "https://www.linkedin.com/company/hft-consultancy/",
    "https://www.linkedin.com/in/hft-quant/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
