"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    description: string;
    width: number;
    height: number;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
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
    <div className="relative w-full max-w-[600px] h-auto mx-auto group aspect-video">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 600px"
            priority={index === currentIndex} // Prioritize loading current image
          />
        </div>
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

      {/* Image Description */}
      <p className="text-center text-base text-gray-700 mt-4 italic">
        {images[currentIndex].description}
      </p>
    </div>
  );
};

export default Carousel;
