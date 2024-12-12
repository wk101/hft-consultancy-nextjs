import Image from "next/image";
import { FC } from "react";

const Tech: FC = () => {
  return (
    <section id="tech" className="flex flex-col items-center justify-center max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-10">
      <Image
        src="/clients.svg" // Path to your SVG in the public folder
        alt="Showcasing our use of KDB+, Python optimized for Intel SYCL, Intel Math Kernel Library, FPGAs UL3524, and Nvidia A100 GPUs to deliver unmatched performance, backed by deep industry expertise."
        width={800} // Increased size of the logo
        height={600} // Adjust height accordingly
        priority // Optimizes loading
      />
    </section>
  );
};

export default Tech;
