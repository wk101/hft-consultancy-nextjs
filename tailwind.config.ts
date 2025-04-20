/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",  // Small devices (e.g., phones)
        md: "768px",  // Medium devices (e.g., tablets)
        lg: "1024px", // Large devices (e.g., laptops)
        xl: "1280px", // Extra large devices (e.g., desktops)
        "2xl": "1536px", // Ultra-wide monitors
      },
      keyframes: {
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
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
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'fade-in-left': 'fadeInLeft 1.5s ease-in-out',
        fadeInScale: "fadeInScale 3s ease-out forwards",
        'hover-scale': 'hoverScale 500ms ease-in-out',
        "fade-slide-in": "fadeSlideIn 3s ease-out forwards",
        "fade-slide-in-delay": "fadeSlideIn 3s ease-out 0.5s forwards",
        fadeIn: "fadeIn 0.5s ease-in-out",
        scaleIn: "scaleIn 0.5s ease-in-out",
      },
      colors: {
        primary: "#1A1A1A", // Tailwind Blue
        secondary: "#9333ea", // Tailwind Purple
        neutral: {
          light: "#f3f4f6",
          DEFAULT: "#e5e7eb",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [],
};
