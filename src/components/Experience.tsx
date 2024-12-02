import React from "react";
import Carousel from "@/components/client/Carousel";

const images = [
  {
    src: "/office1.jpg",
    alt: "Picture of the main entrance of Santo Domingo office space",
    description: "The main entrance of our Santo Domingo office space.",
  },
  {
    src: "/office2.jpg",
    alt: "Picture of a luxurious conference room",
    description: "A luxurious conference room with state-of-the-art facilities.",
  },
  {
    src: "/office3.jpg",
    alt: "Picture of a meeting room with a large flat screen",
    description:
      "A meeting room featuring a large flat screen at the Santo Domingo office.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="ml-64 bg-gray-100 p-10">
      <h2 className="text-3xl text-black font-bold mb-6">
        Experience Our Office Space
      </h2>
      <Carousel images={images} />
    </section>
  );
};

export default Experience;
