"use client";

import React from "react";
import Image from "next/image";

interface CardExpandedProps {
  title: string;
  description: string;
  largeImage: string;
  onClose: () => void;
}

const CardExpanded: React.FC<CardExpandedProps> = ({
  title,
  description,
  largeImage,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-white rounded-full p-2"
        >
          ✕
        </button>

        {/* Large Image */}
        <div className="relative w-full h-[300px] mb-4">
          <Image src={largeImage} alt={title} fill className="object-cover rounded" />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardExpanded;
