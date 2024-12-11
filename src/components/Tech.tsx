import Image from "next/image";
import { FC } from "react";

const Tech: FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "40px 0", // Increased padding for better spacing
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="/clients.svg" // Path to your SVG in the public folder
        alt="Showcasing our use of KDB+, Python optimized for Intel SYCL, Intel Math Kernel Library, FPGAs UL3524, and Nvidia A100 GPUs to deliver unmatched performance, backed by deep industry expertise."
        width={800} // Increased size of the logo
        height={600} // Adjust height accordingly
        priority // Optimizes loading
      />
    </div>
  );
};

export default Tech;
