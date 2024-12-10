"use client";

import React from "react";

const HeroInteractive: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-start">
      <a href="#recent-work">
        <button
          className="px-6 py-3 text-lg font-semibold rounded-lg transition bg-blue-600 text-white hover:bg-blue-700"
        >
          Explore our HFT services &rarr;
        </button>
      </a>
    </div>
  );
};

export default HeroInteractive;
