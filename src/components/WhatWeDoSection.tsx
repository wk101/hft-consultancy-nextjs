import React from "react";
import Accordion from "@/components/client/Accordion"; // Import Accordion component
import  TradingCards from "@/components/TradingCards";

// Accordion data that will be passed down
const accordionItems = [
  {
    title: "IP Core Development",
    content: `Our team specializes in designing and optimizing IP cores to ensure unmatched 
      performance for high-frequency trading systems. By leveraging our expertise, 
      we provide tailored solutions that enhance processing efficiency, reduce latency, 
      and improve overall throughput. Our IP cores are tested and validated by Experienced Electrical Engineers for 
      compatibility with the latest FPGA technologies.`,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-16 h-16 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
        />
      </svg>
    ),
  },
  {
    title: "Custom PCB Design",
    content: `Custom PCB Design for High-Frequency Trading: Cost-Effective and High-Performance Solutions

At HFT Consultancy, we specialize in in-house custom PCB design tailored to the unique demands of high-frequency trading (HFT). While FPGAs offer unparalleled speed, our advanced PCB solutions provide a cost-effective alternative without sacrificing performance. Our designs are optimized for low-latency data processing, ensuring rapid signal transmission for ultra-fast trades; power efficiency, minimizing energy consumption; and thermal stability.

Discover how our PCB designs help reduce costs while meeting the rigorous requirements of HFT systems.`,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-16 h-16 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
  },
  {
    title: "Security Enhancements",
    content: `With the ever-growing threat landscape, securing your trading infrastructure 
      is our top priority. We implement advanced security protocols and intrusion 
      detection systems to protect your data.`,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-16 h-16 text-red-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "Network Optimization",
    content: `Network performance is a cornerstone of efficient trading operations. 
      We optimize networks for ultra-low latency by implementing advanced 
      networking techniques.`,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-16 h-16 text-purple-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "HFT Strategy Modeling",
    content: `Success in high-frequency trading requires precision and adaptability. 
      Our modeling services include the development and backtesting of 
      complex trading algorithms tailored to your needs.`,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-16 h-16 text-yellow-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    
    <article
  id="what-we-do"
  className="bg-gray-100 text-gray-700 max-w-screen-xl mx-auto mt-8 px-6 sm:px-8 lg:px-16 py-12"
>
  {/* Section Heading */}
  <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black text-center mb-8">
    We Code, You Profit &mdash; No Rabbit&apos;s Foot Required
  </h2>
    {/* Trading Cards */}
    <div className="mt-8 mb-8">
    <TradingCards />
  </div>
  

  {/* Expertise Section */}
  <div className="space-y-6">
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Our Expertise</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        At HFT Consultancy, our expertise spans all asset classes, including fixed income, equities, derivatives, forex, and cryptocurrency markets.
      </p>
    </div>

    {/* Focus Section */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Focus</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        We focus on delivering safe investments with high returns and real-world solutions for high-frequency trading (HFT) and algorithmic strategies such as market-making, arbitrage, and execution optimization.
      </p>
    </div>

    {/* Experience Section */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Experience</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        With decades of experience in institutional investment and close to 10 years as consultants, we’ve helped a long list of institutional investors and high-net-worth clients achieve safe investments with high returns. Our multidisciplinary team combines expertise in financial mathematics, algorithm development, and electrical engineering to design and implement systems that are fast, reliable, and efficient. With a hands-on approach and deep industry knowledge.
      </p>
    </div>
  </div>

  {/* What We Offer Section */}
  <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black text-center mt-8 mb-8">
    What We Offer
  </h2>

  {/* Accordion Section */}
  <div className="mt-4">
    <Accordion items={accordionItems} /> {/* Pass data to Accordion component */}
  </div>
</article>

  );
};

export default WhatWeDoSection;
