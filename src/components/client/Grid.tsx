"use client";

import React, { useState } from "react";
import Card from "./Card";

interface GridProps {
  items: {
    title: string;
    description: string;
    metaDescription: string;
    thumbnail: string;
    largeImage: string;
  }[];
}

const Grid: React.FC<GridProps> = ({ items }) => {
  const [expandedWork, setExpandedWork] = useState<number | null>(null);

  const closeExpandedView = () => setExpandedWork(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            metaDescription={item.metaDescription}
            thumbnail={item.thumbnail}
            largeImage={item.largeImage}
            isExpanded={expandedWork === index}
            onClick={() => setExpandedWork(expandedWork === index ? null : index)}
          />
        ))}
      </div>
      {/* Overlay */}
      {expandedWork !== null && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={closeExpandedView}
        ></div>
      )}
    </div>
  );
};

export default Grid;
