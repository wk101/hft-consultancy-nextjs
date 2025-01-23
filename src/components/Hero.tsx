import React from "react";
import HeroInteractive from "./client/HeroInteractive"; // Import client component

const Hero: React.FC = () => {
  return (
    <section
  id="hero"
  className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 md:h-screen gap-6"
>
      {/* Left Column: Static Text Content */}
      <div className="flex-1 flex flex-col justify-center sm:text-center lg:text-left md:text-center animate-fade-in-left ">
        <p className="text-gray-500 text-xs mt-4 sm:text-md md:text-base lg:text-lg mb-2">
          10 Years Supporting Every Investor, Big or Small
        </p>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight hover:text-primary hover:animate-hover-scale">
          Trust Us, It&apos;s Not Just Luck in<br className="hidden sm:block" />
          High-Frequency <br className="hidden sm:block" />Trading         </h1>
        <p className="text-md sm:text-sm font-bold md:text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
        Tired of Crossing Your Fingers?  Our Algorithms have Proven Results!  Your
          strategies, stress-free and profit-focused.
        </p>
        {/* Interactive button */}
        <HeroInteractive />
        <div className="mt-8"></div> {/* Spacing below the button */}
      </div>

      {/* Right Column: Responsive Image */}
      <div 
  style={{
    flex: 1, // Ensures the column takes up equal space in the parent flex container
    width: "100%", // Full width of the container
    height: "100vh", // Full height of the viewport
    display: "block", // Ensures block-level behavior
    backgroundImage: `url('/hero_pic4.png')`, // Path to your image
    backgroundSize: "cover", // Ensures the image fills the container
    backgroundPosition: "right center", // Positions the image to the left, vertically centered
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
  }}
></div>

    </section>
  );
};

export default Hero;
