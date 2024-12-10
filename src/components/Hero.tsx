"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16"
      style={{
        height: "100vh", // Full viewport height
        background: "linear-gradient(to right, #ffffff, #f9fafb)", // Subtle gradient
      }}
    >
      {/* Left Column: Text Content */}
      <div className="flex-1 flex flex-col justify-center md:pr-8 text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          What We Do: <br className="hidden sm:block" />
          High-Performance Trading Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          By delivering accelerators, ultra-low latency solutions, and financial models, 
          we empower your trading systems with unmatched efficiency.
        </p>
        <div className="flex justify-center md:justify-start">
        <a href="#experience">
          <button className="px-6 py-3 text-lg font-semibold rounded-lg transition bg-blue-600 text-white hover:bg-blue-700">
            Learn More &rarr;
          </button>
        </a>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="flex-1 h-full">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero_pic.png')`, // Set the image
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
