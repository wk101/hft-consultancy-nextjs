"use client";

import React, { useState } from "react";
import CardThumbnail from "./CardThumbnail";
import CardExpanded from "./CardExpanded";

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

  return (
    <div className="relative">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <CardThumbnail
            key={index}
            title={item.title}
            metaDescription={item.metaDescription}
            thumbnail={item.thumbnail}
            onClick={() => setExpandedWork(index)}
          />
        ))}
      </div>

      {/* Expanded Card */}
      {expandedWork !== null && (
        <CardExpanded
          title={items[expandedWork].title}
          description={items[expandedWork].description}
          largeImage={items[expandedWork].largeImage}
          onClose={() => setExpandedWork(null)}
        />
      )}
    </div>
  );
};

export default Grid;
