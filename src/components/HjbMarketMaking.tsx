import React from "react";

const HjbMarketMaking: React.FC = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
        Intel HPC: Scaling Profits in HFTs Future.        
        </h2>
        <p className="mt-4 text-lg text-gray-700">
        Discover how cutting-edge **High-Performance Computing (HPC)** techniques optimize 
          **High-Frequency Trading (HFT)** strategies. This is a simple demonstration of 
          how technology Intel HPC drives success in todays financial markets.
        </p>
      </div>
      <div className="mt-10 max-w-4xl mx-auto">
        <div className="flex justify-center mt-10">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/RbR7G38sgxI"
            title="High-Performance Computing in HFT: Optimizing Market Making with HPC Techniques"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">
          Why This Matters for Your Business
          </h3>
          <p className="mt-4 text-lg text-gray-700">
          This video demonstrates the a simple (not giving away trade secrets) application of HPC in solving 
          **Hamilton Jacobi Bellman (HJB) equations** for market-making strategies. By leveraging 
          these advanced techniques, businesses can:
        </p>
          <ul className="mt-6 space-y-4 text-left text-gray-700">
          <li>🚀 Achieve ultra-low latency and faster trading decisions.</li>
          <li>📈 Optimize profitability through predictive strategies.</li>
          <li>⚙️ Leverage complex mathematical models for competitive edge.</li>
          <li>🌐 Stay ahead in the ever-evolving world of MM trading.</li>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default HjbMarketMaking;
