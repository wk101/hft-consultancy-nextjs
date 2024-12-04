import React, { useMemo } from "react";
import Grid from "@/components/client/Grid";

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
  
  const demoWorkItems = Array.from({ length: 9 }, (_, index) => workItems[index % workItems.length]);


  return (
    <section id="recent-work" className="bg-white p-10 relative">
      <h2 className="text-3xl text-black text-center font-bold mb-6">Recent Work</h2>
      <Grid items={demoWorkItems} />
    </section>
  );
};


export default RecentWork;
