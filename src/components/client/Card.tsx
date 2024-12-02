"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  metaDescription: string;
  thumbnail: string;
  largeImage: string;
  isExpanded: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  metaDescription,
  thumbnail,
  largeImage,
  isExpanded,
  onClick,
}) => {
  return (
    <div
      className={`relative bg-gray-100 rounded shadow overflow-hidden ${
        isExpanded ? "col-span-full z-20 animate-scaleIn" : "hover:shadow-lg"
      }`}
      onClick={onClick}
    >
      {/* Image Section */}
      <div
        className={`relative ${
          isExpanded
            ? "h-[400px] transition-all duration-500"
            : "h-[150px] hover:brightness-75"
        }`}
      >
        <Image
          src={isExpanded ? largeImage : thumbnail}
          alt={metaDescription}
          fill
          className="object-cover"
        />
        {/* View Button */}
        {!isExpanded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="text-white text-sm border border-white/50 px-4 py-2 rounded">
              View
            </span>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div
        className={`p-4 transition-opacity duration-300 ${
          isExpanded ? "text-black" : "text-gray-800"
        }`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
