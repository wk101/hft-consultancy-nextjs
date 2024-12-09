"use client";

import React from "react";
import Image from "next/image";

interface CardThumbnailProps {
  title: string;
  metaDescription: string;
  thumbnail: string;
  onClick: () => void;
}

const CardThumbnail: React.FC<CardThumbnailProps> = ({
  title,
  metaDescription,
  thumbnail,
  onClick,
}) => {
  return (
    <div
      className="relative bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={onClick}
      style={{ width: "220px", height: "160px" }} // Adjusted height while keeping width intact
    >
      

      {/* Card Image */}
      <div className="relative w-full h-[120px]"> {/* Adjusted image height */}
        <Image
          src={thumbnail}
          alt={metaDescription}
          fill
          className="object-contain p-2 rounded-t-lg"
        />
      </div>

      {/* Title */}
      <div className="p-2">
        <h3 className="text-center text-sm font-semibold text-gray-800">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CardThumbnail;
