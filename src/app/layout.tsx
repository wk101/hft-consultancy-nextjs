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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO Metadata */}
        <title>High-Frequency Trading Solutions | HFT Consultancy</title>
        <meta
          name="description"
          content="Delivering industry-leading solutions for Algo Trading, incl. high-frequency trading (HFT) with expertise in ultra-low latency, financial modeling, IP core optimization, and trading lifecycle management."
        />
        <meta
          name="keywords"
          content="HFT, HFT Trading, algorithmic trading, algo trading, high-frequency trading, ultra-low latency, financial modeling, IP core optimization, trading lifecycle management, FPGA, network optimization, quant development"
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="HFT Consultancy" />
        <meta
          property="og:description"
          content="Delivering industry-leading solutions for HFT, Algo Trading incl high-frequency trading (HFT) with expertise in ultra-low latency, financial modeling, IP core optimization, and trading lifecycle management."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hftconsultancy.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HFT Consultancy" />
        <meta
          name="twitter:description"
          content="Delivering industry-leading solutions for high-frequency trading (HFT)."
        />
        <meta name="twitter:image" content="/twitter-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hftconsultancy.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HFT Consultancy",
              "url": "https://hftconsultancy.com",
              "logo": "https://hftconsultancy.com/favicon.ico",
              "sameAs": ["https://linkedin.com/in/hft-quant"],
            }),
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
