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
    badge?: string; // Optional badge property
  }[];
}

const Grid: React.FC<GridProps> = ({ items }) => {
  const [expandedWork, setExpandedWork] = useState<number | null>(null);

  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"> {/* Tighter gaps */}
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
