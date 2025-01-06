import React from "react";
import HeroInteractive from "./client/HeroInteractive"; // Import client component

const Hero: React.FC = () => {
  return (
    <section
  id="hero"
  className="relative flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 md:h-screen gap-6"
  style={{
    backgroundImage: `url('/Q.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Left Column: Static Text Content */}
  <div
    className="flex-1 flex flex-col justify-center text-center md:text-left animate-fade-in-left md:pr-8"
  >
    <p className="text-gray-500 text-xs mt-4 sm:text-sm md:text-base lg:text-lg mb-4">
      10 Years Supporting Every Investor, Big or Small
    </p>
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight hover:text-primary hover:animate-hover-scale">
      A Proven Foundation in <br className="hidden sm:block" />
      High-Frequency <br className="hidden sm:block" />
      Trading
    </h1>
    <p className="text-lg sm:text-sm font-bold md:text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
      End-to-End Algorithmic Strategy Support, <br className="hidden sm:block" />
      for Stress-Free Performance
    </p>
    {/* Interactive button */}
    <HeroInteractive />
    <div className="mt-8"></div> {/* Spacing below the button */}
  </div>

  {/* Right Column: Responsive Image */}
  <div className="flex-1 w-full h-64 sm:h-96 md:h-full animate-fade-in hidden md:block">
  <div
    className="w-full h-full bg-cover mt-24 bg-center shadow-lg"
    style={{
      backgroundImage: `url('/hero_pic2.png')`,
      clipPath: "inset(5px 5% 39.38% 5% round 15% 0)" // Creates a horizontal pill shape
    }}
  ></div>
</div>
</section>


  );
};

export default Hero;
