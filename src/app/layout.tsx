// layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { ReactNode } from 'react';

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

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="HFT, high-frequency trading, ultra-low latency, IP cores, financial modeling, trading lifecycle management, network optimization, FPGA, trading algorithms, microservices architecture, cyber security, trading infrastructure, accelerators, financial math, quant development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hftconsultancy.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://hftconsultancy.com" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </div>
    </>
  );
};

export default RootLayout;
