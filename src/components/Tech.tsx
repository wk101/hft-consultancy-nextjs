import Image from "next/image";
import { FC } from "react";

const Tech: FC = () => {
  return (
    <section
      id="tech"
      className="flex flex-col items-center justify-center max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-10"
    >
      <div className="w-full max-w-[800px]">
        <Image
          src="/clients.svg" // Path to your SVG in the public folder
          alt="howcasing our use of institutional technology vendors, including KDB+, HPC Python optimized with the C++ Intel Compiler, SYCL, Intel Math Kernel Library, FPGAs (UL3524), Nvidia A100 GPUs, and Dell Workstations."
          width={800} // Define the maximum width
          height={600} // Maintain aspect ratio
          className="w-full h-auto object-contain" // Make it responsive
          priority
        />
      </div>
    </section>
  );
};

export default Tech;
