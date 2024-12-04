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
      className="relative bg-gray-100 rounded shadow hover:shadow-lg cursor-pointer"
      onClick={onClick}
      style={{ width: "200px", height: "250px" }} // Adjusted size
    >
      {/* Thumbnail Image */}
      <div className="relative h-[150px]">
        <Image
          src={thumbnail}
          alt={metaDescription}
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title */}
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default CardThumbnail;
