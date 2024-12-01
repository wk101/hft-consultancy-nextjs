"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex px-16"
      style={{
        height: "95vh", // Full viewport height
        marginLeft: "16rem", // Matches the sidebar width
        background: "linear-gradient(to right, #ffffff, #f9fafb)", // Subtle gradient background
      }}
    >
      {/* Left Column: Text Content */}
      <div className="flex-1 flex flex-col justify-center pr-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          <strong>What We Do:</strong> High-Performance Trading Solutions
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          <strong>How We Can Help You:</strong> By delivering accelerators,
          ultra-low latency solutions, and financial models, we empower your
          trading systems with unmatched efficiency.
        </p>
        <button
          className="px-6 py-3 text-lg font-semibold rounded-lg transition flex items-center space-x-2"
          style={{
            background: "linear-gradient(to right, #004aad, #00c9ff)", // Blue gradient
            color: "white",
          }}
        >
          <span>Learn More</span>
          <span className="text-xl">&rarr;</span>
        </button>
      </div>

      {/* Right Column: Image */}
      <div
        className="flex-1 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero_pic.png')`, // Background image
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents repeating
          backgroundPosition: "center", // Centers the image
        }}
      ></div>
    </section>
  );
};

export default Hero;
