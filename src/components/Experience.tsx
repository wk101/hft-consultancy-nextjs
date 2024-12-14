import React from "react";
import Carousel from "@/components/client/Carousel";

const images = [
  {
    src: "/office1.jpg",
    alt: "Picture of the main entrance of Santo Domingo office space",
    description: "The main entrance of our Santo Domingo office space.",
    width: 1200, // Provide the image's width
    height: 800, // Provide the image's height
  },
  {
    src: "/office2.jpg",
    alt: "Picture of a luxurious conference room",
    description: "A luxurious conference room with state-of-the-art facilities.",
    width: 1200,
    height: 800,
  },
  {
    src: "/office3.jpg",
    alt: "Picture of a meeting room with a large flat screen",
    description: "A meeting room featuring a large flat screen at the Santo Domingo office.",
    width: 1200,
    height: 800,
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="px-6 sm:px-12 lg:px-16 py-10 bg-gray-100 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold text-black mb-4">
        Experience Our Office Space
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>24-Hour Security for Peace of Mind</li>
        <li>Highly Available Internet Connectivity</li>
      </ul>
      <Carousel images={images} />
    </section>
  );
};

export default Experience;
