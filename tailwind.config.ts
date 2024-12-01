import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-in": "fadeSlideIn 3s ease-out forwards", // Add forwards
        "fade-slide-in-delay": "fadeSlideIn 3s ease-out 0.5s forwards", // Add forwards
        "fadeIn": "fadeIn 0.5s ease-in-out",
        "scaleIn": "scaleIn 0.5s ease-in-out",
      
      },
    },
  },
  plugins: [],
} satisfies Config;
