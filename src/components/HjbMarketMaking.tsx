import React from "react";
import Tech from "@/components/Tech";

const HjbMarketMaking: React.FC = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black text-center mb-8">
        Scaling profits with <strong>heterogeneous compute</strong> power using <em>Intel OneAPI</em>.
        </h2>
        <Tech />
        <p className="mt-4 text-lg text-gray-700">
          Discover how High-Performance Computing (HPC) techniques optimize profit
          for High-Frequency Trading (HFT) strategies. <br/>This is a simple demonstration but can be extended for more complex or realistic models.
        </p>
      </div>
      <div className="mt-10 max-w-4xl mx-auto">
        <div className="flex justify-center mt-10">
          <figure className="w-full aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/RbR7G38sgxI"
              title="High-Performance Computing in HFT: Optimizing Market Making with HPC Techniques"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <figcaption className="text-gray-800 mt-2">
              High-Performance Computing in HFT: Optimizing Market Making with HPC Techniques
            </figcaption>
          </figure>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Infromative Video on HPC and HFT
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            In HFT, we are always thinking about reducing latency, whether through <em/>fibre optic networks, microwave towers, FPGAs, or PCBs<em/>.  We seldom talk about High Performance Computing. <br/>Here, we demonstrate how HPC can be used to solve <strong> Hamilton Jacobi Bellman (HJB) equations</strong> for HFT market-making strategies. By leveraging
            these HPC techniques, we can significantly reduce the time required to create an optimal trading surface.
          </p>
          <ul className="mt-6 space-y-4 text-left text-gray-700">
            <li>🚀 Achieve ultra-low latency and faster trading decisions.</li>
            <li>📈 Optimize profitability through predictive strategies.</li>
            <li>⚙️ Leverage complex mathematical models for competitive edge.</li>
            <li>🌐 Stay ahead in the ever-evolving world of HFT trading.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HjbMarketMaking;
