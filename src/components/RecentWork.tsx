"use client"
import React, { useState } from "react";
import Image from "next/image";

const workItems = [
  {
    title: "KDB+ Tick Plant Engine",
    description:
      "KDB+ is an in-memory tick plant column store that uses the Q programming language to publish and manage tick data efficiently.",
    metaDescription:
      "Photo shows Q code KDB+ for a tick plant engine: KDB, an in-memory column store optimized for managing and publishing tick data with unmatched speed and accuracy using Q language.",
    thumbnail: "/images/recent-work/kdb-tick-plant-thumbnail.jpg",
    largeImage: "/images/recent-work/kdb-tick-plant.jpg",
  },
  {
    title: "Ultra-Low Latency Trading",
    description:
      "UL3524 is the most expensive FPGA, costing $100k per unit, with a transceiver offering 3ns latency. Ten units are required, but comparable latency can be achieved using optimized PCB design.",
    metaDescription:
      "Ultra-Low Latency Trading: Photo of UL3524 FPGA with industry-leading 3ns latency, balancing high costs with alternative PCB solutions.",
    thumbnail: "/images/recent-work/latency-trading-thumbnail.jpg",
    largeImage: "/images/recent-work/latency-trading.jpg",
  },
  {
    title: "Cyber Security",
    description:
      "Cyber security is paramount in HFT trading. Fortinet offers premium firewalls that are expensive but deliver unparalleled protection with advanced threat management, low latency, and reliability.",
    metaDescription:
      "Illustration of Fortinet's ideal architecture: showcasing advanced threat management, low-latency performance, and unparalleled reliability for secure HFT environments.",
    thumbnail: "/images/recent-work/cyber-security-thumbnail.jpg",
    largeImage: "/images/recent-work/cyber-security.jpg",
  },
  {
    title: "HFT Servers",
    description:
      "HFT servers are high-spec machines equipped with redundant power supplies, ECC memory, and optimized hardware for reliable and low-latency trading performance.",
    metaDescription:
      "High-frequency trading server: a photo showcasing high-spec hardware with redundant power supplies, ECC memory, and robust architecture for maximum reliability.",
    thumbnail: "/images/recent-work/hft-servers-thumbnail.jpg",
    largeImage: "/images/recent-work/hft-servers.jpg",
  },
];

const RecentWork: React.FC = () => {
  const [expandedWork, setExpandedWork] = useState<number | null>(null);

  const closeExpandedView = () => setExpandedWork(null);

  return (
    <section className="ml-64 bg-white p-10 relative">
      <h2 className="text-3xl text-black font-bold mb-6">Recent Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workItems.map((item, index) => (
          <div
            key={index}
            className={`relative bg-gray-100 rounded shadow overflow-hidden ${
              expandedWork === index
                ? "col-span-full z-20 animate-scaleIn"
                : "hover:shadow-lg"
            }`}
            onClick={() => setExpandedWork(expandedWork === index ? null : index)}
          >
            {/* Image */}
            <div
              className={`relative ${
                expandedWork === index
                  ? "h-[400px] transition-all duration-500"
                  : "h-[150px] hover:brightness-75"
              }`}
            >
              <Image
                src={expandedWork === index ? item.largeImage : item.thumbnail}
                alt={item.metaDescription}
                fill
                className="object-cover"
              />
              {/* View Button */}
              {expandedWork !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="text-white text-sm border border-white/50 px-4 py-2 rounded">
                    View
                  </span>
                </div>
              )}
            </div>

            {/* Text */}
            <div
              className={`p-4 transition-opacity duration-300 ${
                expandedWork === index ? "text-black" : "text-gray-800"
              }`}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Overlay */}
      {expandedWork !== null && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={closeExpandedView}
        ></div>
      )}
    </section>
  );
};

export default RecentWork;
