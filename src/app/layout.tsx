//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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

const metadata = {
  title: "HFT Consultancy",
  description:
    "Delivering industry-leading solutions for high-frequency trading (HFT) with expertise in ultra-low latency, financial modeling, IP core optimization, and trading lifecycle management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Title and Meta Description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        {/* Keywords */}
        <meta
          name="keywords"
          content="HFT, high-frequency trading, ultra-low latency, IP cores, financial modeling, trading lifecycle management, network optimization, FPGA, trading algorithms, microservices architecture, cyber security, trading infrastructure, accelerators, financial math, quant development"
        />

        {/* Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Metadata for Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="/og-image.png" // Replace with the actual OG image path
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hftconsultancy.com" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="/twitter-image.png" // Replace with the actual Twitter image path
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hftconsultancy.com" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
