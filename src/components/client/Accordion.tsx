"use client";

import React, { useState } from "react";

// Define types for the accordion items
interface AccordionItem {
  title: string;
  content: string;
  svg: React.ReactNode; // SVG as React component
}

// Define props type for the Accordion component
interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-md shadow-md"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center p-6 text-left font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            <div className="mr-4">{item.svg}</div>
            <span>{item.title}</span>
          </button>
          {activeIndex === index && (
            <div className="p-6 text-gray-600 border-t border-gray-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
