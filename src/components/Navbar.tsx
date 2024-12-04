"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // To control mobile menu visibility
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Debounce the scroll event for performance
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        updateActiveSection(window.scrollY);
      }, 100);
    };

    const updateActiveSection = (scrollPos: number) => {
      const sections = ["hero", "recent-work", "experience", "contact"];
      const offsets = sections.map((id) => ({
        id,
        offset: document.getElementById(id)?.offsetTop || 0,
      }));

      const active = offsets.find(
        (section, index) =>
          scrollPos >= section.offset &&
          (index === offsets.length - 1 || scrollPos < offsets[index + 1]?.offset)
      );
      setActiveSection(active?.id || "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clean up timeout on unmount
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Mobile Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 left-4 z-50 text-white"
        aria-label="Toggle Menu"
      >
        <FaBars size={24} />
      </button>

      {/* Navbar (Top Bar) */}
      <div
        className={`fixed top-0 left-0 w-full p-8 bg-gray-800 text-white flex justify-between items-center z-50 
          ${isMenuOpen ? "h-screen" : "h-16"} transition-all duration-300`}
        style={{
          background: `linear-gradient(to bottom, #1F2937, #111827 ${50 + scrollPosition * 0.05}%)`,
        }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/logo-black.png" alt="Logo" className="object-contain w-full h-full" />
          </div>
        </div>

        {/* Navigation Links (Mobile or Desktop) */}
        <div
          className={`lg:flex space-x-6 items-center transition-all duration-300 ${isMenuOpen ? "flex-col" : "hidden lg:flex"}`}
        >
          {[{ id: "hero", label: "Home" }, { id: "recent-work", label: "Recent Work" }, { id: "experience", label: "Experience" }, { id: "contact", label: "Contact" }].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block py-2 px-4 rounded-md transition ${
                activeSection === item.id
                  ? "text-blue-400 bg-gray-800"
                  : "hover:text-blue-400 hover:bg-gray-700"
              }`}
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="hidden lg:flex space-x-4 text-xl">
          <a
            href="https://do.linkedin.com/company/hft-consultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/HFTConsultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/@hftconsultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://github.com/HFTConsultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Footer (Mobile and Desktop) */}
      <footer className="text-center text-xs text-gray-500 py-2 lg:hidden">
        <p>© HFT Consultancy</p>
      </footer>
    </div>
  );
};

export default Navbar;
