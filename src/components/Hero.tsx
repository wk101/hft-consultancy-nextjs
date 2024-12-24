import React from "react";
import HeroInteractive from "./client/HeroInteractive"; // Import client component

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-8 sm:py-12 md:py-0 md:h-screen"
      style={{
        background: "linear-gradient(to right, #ffffff, #f9fafb)", // Subtle gradient
      }}
    >
      {/* Left Column: Static Text Content */}
      <div
        className="flex-1 flex flex-col justify-center md:pr-8 text-center md:text-left animate-fade-in-left"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight hover:text-primary hover:animate-hover-scale">
          What We Do: <br className="hidden sm:block" />
          Maximizing Returns Safely for Institutional Investors
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
        By delivering ultra-low latency solutions, robust risk-management financial models, and tailored strategies, we cover everything from A to Z.
        </p>
        {/* Delegate interactive button to client component */}
        <HeroInteractive />
      </div>

      {/* Right Column: Responsive Image */}
      <div
        className="flex-1 w-full h-64 md:h-full animate-fade-in"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero_pic.png')`, // Replace with your image
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
