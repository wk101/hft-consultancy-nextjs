"use client";
import React, { useState } from "react";

const images = [
  {
    src: "/office1.jpg",
    alt: "Picture of the main entrance of Santo Domingo office space",
    description: "The main entrance of our Santo Domingo office space.",
  },
  {
    src: "/office2.jpg",
    alt: "Picture of a luxurious conference room",
    description: "A luxurious conference room with state-of-the-art facilities.",
  },
  {
    src: "/office3.jpg",
    alt: "Picture of a meeting room with a large flat screen",
    description:
      "A meeting room featuring a large flat screen at the Santo Domingo office.",
  },
];

const Experience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="experience" className="ml-64 bg-gray-100 p-10">
      <h2 className="text-3xl text-black font-bold mb-6">Experience Our Office Space</h2>
      <div className="relative w-[600px] h-[400px] mx-auto group">
        {/* Carousel Images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white text-lg p-3 rounded-full hover:bg-black/70 transition opacity-0 group-hover:opacity-100 cursor-pointer"
          onClick={goToPrevious}
          aria-label="Previous Image"
          style={{ zIndex: 20 }}
        >
          &#8249; {/* Left Arrow */}
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white text-lg p-3 rounded-full hover:bg-black/70 transition opacity-0 group-hover:opacity-100 cursor-pointer"
          onClick={goToNext}
          aria-label="Next Image"
          style={{ zIndex: 20 }}
        >
          &#8250; {/* Right Arrow */}
        </button>
      </div>
      {/* Image Description */}
      <p className="text-center text-base text-gray-700 mt-4 italic">
        {images[currentIndex].description}
      </p>
    </section>
  );
};

export default Experience;
