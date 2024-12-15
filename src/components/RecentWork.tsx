//import React, { useMemo } from "react";
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
  {
    "title": "Fast and Slow Path HFT",
    "description": 
      "FD.io supports both fast path and slow path operations, enabling high-frequency trading (HFT) platforms to combine ultra-low latency trading with robust risk management. Fast path handles real-time trading decisions and critical market data ingestion with minimal latency, while slow path monitors systemic risks, black swan events, and compliance tasks.",
    "metaDescription": 
      "Leverage FD.io for HFT: Fast path for real-time trading and slow path for risk and compliance, ensuring high-speed execution and robust oversight.",
    "thumbnail": "/images/recent-work/fd-io-hft-thumbnail.jpg",
    "largeImage": "/images/recent-work/fd-io-hft.png"
  },
  {
    "title": "Optimizing Keccak CUDA",
    "description": 
      "Efforts are underway to optimize Keccak for mining by leveraging advanced CPU and GPU techniques. Current approaches involve AVX512 intrinsics for CPU and CUDA for GPU, targeting performance improvements through parallel/sequential execution strategies, loop restructuring (combining/splitting), and memory/cache optimization. The optimization scope also includes porting to other languages and utilizing OpenMP for parallelism.",
    "metaDescription": 
      "Optimizing Keccak for mining with AVX512 intrinsics on CPU, CUDA on GPU, memory/cache enhancements, OpenMP, and parallel execution strategies.",
    "thumbnail": "/images/recent-work/keccak-optimization-thumbnail.jpeg",
    "largeImage": "/images/recent-work/keccak-optimization.jpg"
  },
  {
    "title": "Fireblocks: Workflows",
    "description": 
      "A structured roadmap for Fireblocks to implement transaction approval consensus workflows. With Intel SGX Enclaves.",
    "metaDescription": 
      "Fireblocks : Streamline Intel SGX Enclave workflows with Transaction approvals",
    "thumbnail": "/images/recent-work/fireblocks.png",
    "largeImage": "/images/recent-work/fireblocks.jpg"
  },
  {
    "title": "HFT with Jupiter on Solana",
    "description": 
      "Harness the power of a Mean Reversion Bot built on Solana, leveraging QuickNode and Jupiter Aggregator's cutting-edge technology. The bot utilizes Jupiter's Smart Order Routing (SOR) algorithm to aggregate pricing from multiple decentralized exchanges (DEXs) and automated market makers (AMMs)",
    "metaDescription": 
      "Build a Mean Reversion Bot on Solana using QuickNode and Jupiter Aggregator. Mev Resistant,  Utilize Smart Order Routing (SOR) for optimal pricing across DEXs and AMMs to enhance trading efficiency.",
    "thumbnail": "/images/recent-work/quicknode.jpg",
    "largeImage": "/images/recent-work/jupiter.png"
  }
  
];

const RecentWork: React.FC = () => {
  
  const demoWorkItems = Array.from({ length: 8 }, (_, index) => workItems[index % workItems.length]);


  return (
    <section id="recent-work" className="bg-white max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-10">
      <h2 className="text-3xl text-black text-center font-bold mb-6">Recent Work</h2>
      <Grid items={demoWorkItems} />
    </section>
  );
};


export default RecentWork;
