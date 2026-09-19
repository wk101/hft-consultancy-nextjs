//import React, { useMemo } from "react";
import Grid from "@/components/client/Grid";

const workItems = [
  {
    title: "KDB+ Tick Plant",
    description:
      "Our implementation for a leading investment bank spanned all business units, providing a unified data source seamlessly integrated into group-wide risk engines for comprehensive analysis and decision-making. We utilized KDB+, an in-memory tick plant column store that leverages the Q programming language to efficiently publish and manage tick data.",
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
    title: "Maintain HFT Servers",
    description:
      "HFT servers are high-spec machines equipped with redundant power supplies, ECC memory, and optimized hardware FPGAs, for reliable and low-latency trading performance.",
    metaDescription:
      "High-frequency trading server: a photo showcasing high-spec hardware with redundant power supplies, ECC memory, and robust architecture for maximum reliability.",
    thumbnail: "/images/recent-work/hft-servers-thumbnail.jpg",
    largeImage: "/images/recent-work/hft-servers.jpg",
  },
  {
    "title": "Fast and Slow Path",
    "description": 
      "Our agency developed a cutting-edge fast path and slow path infrastructure for an investment bank, leveraging FD.io to enable fast path operations and significantly reduce latency through user-space optimizations. Meanwhile, the slow path ensures robust risk management and monitors systemic risks and black swan events. This infrastructure seamlessly combines high performance with operational resilience.",
    "metaDescription": 
      "Leverage FD.io for HFT: Fast path for real-time trading and slow path for risk and compliance, ensuring high-speed execution.",
    "thumbnail": "/images/recent-work/fd-io-hft-thumbnail.jpg",
    "largeImage": "/images/recent-work/fd-io-hft.png"
  },
  {
    "title": "Crypto Mining - Keccak",
    "description": 
      "We optimized Keccak for mining, achieving substantial performance improvements by leveraging AVX512 intrinsics for CPUs and CUDA for GPUs. Optimization techniques include parallel and sequential execution, loop restructuring, and memory/cache tuning. The implementation also supports OpenMP for parallelism and is adaptable to other programming languages, ensuring scalability across diverse systems.",
    "metaDescription": 
      "Optimizing Keccak for mining with AVX512 intrinsics on CPU, CUDA on GPU, memory/cache enhancements, OpenMP, and parallel execution strategies.",
    "thumbnail": "/images/recent-work/keccak-optimization-thumbnail.jpeg",
    "largeImage": "/images/recent-work/keccak-optimization.jpg"
  },
  {
    "title": "R&D for a $1 Billion Fund",
    "description": 
      "Our consultancy supported a $1 billion AUM crypto hedge fund on Wall Street by providing R&D strategies and designing a secure Docker-based CI/CD pipeline and infrastructure to execute these strategies. The R&D solutions utilized Fireblocks to implement transaction approval consensus workflows and leveraged Intel SGX enclaves for enhanced security.",
    "metaDescription": 
      "Fireblocks : Streamline Intel SGX Enclave workflows with Transaction approvals",
    "thumbnail": "/images/recent-work/fireblocks.png",
    "largeImage": "/images/recent-work/fireblocks.jpg"
  },
  {
    "title": "On-Chain Execution — Solana",
    "description": 
      "A mean-reversion execution system on Solana, built on QuickNode infrastructure and routed through Jupiter. The engine uses Jupiter's Smart Order Routing to aggregate pricing across decentralised exchanges and automated market makers, with MEV-resistant submission and slippage controls on every fill. We built the signal path, the routing layer and the reconciliation between on-chain settlement and the internal ledger.",
    "metaDescription": 
      "Mean-reversion execution on Solana with QuickNode and Jupiter: MEV-resistant submission and Smart Order Routing across DEXs and AMMs, with on-chain settlement reconciled to the internal ledger.",
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
