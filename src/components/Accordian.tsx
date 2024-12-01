"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const accordionData = [
  {
    title: "⚙️ IP Core Development",
    content:
      "Developing and optimizing IP cores for unparalleled performance in high-frequency trading systems.",
  },
  {
    title: "🛠️ Custom PCB Design",
    content:
      "In-house custom PCB design ensures cost-effective solutions with low-latency performance.",
  },
  {
    title: "🛡️ Security Enhancements",
    content:
      "Implementing robust security measures to protect your trading infrastructure from threats.",
  },
  {
    title: "📶 Network Optimization",
    content:
      "Enhancing network performance for ultra-low latency and efficient trading operations.",
  },
  {
    title: "🎯 HFT Strategy Modeling",
    content:
      "Modeling complex trading strategies with precision and efficiency, tailored for your needs.",
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="accordion" className="ml-64 bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-black mb-6">Industry-Leading HFT Solutions</h2>
      <p className="text-lg text-black mb-4">
        Contact HFT Consultancy for industry-leading solutions in high-frequency trading (HFT). We specialize in high-performance accelerators, optimized IP cores, advanced security enhancements, network optimization, and sophisticated HFT modeling. Our services include:
      </p>
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-md shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              <span>{item.title}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 border-t border-gray-200">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
