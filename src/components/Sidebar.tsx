"use client";

import React, { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Debounce function to limit scroll events
    let timeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Debounce the scroll to optimize performance
      clearTimeout(timeout);
      timeout = setTimeout(() => {
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
      clearTimeout(timeout); // Clear timeout on cleanup
    };
  }, [scrollPosition]);

  return (
    <div
      className="fixed h-screen w-64 text-white p-6 flex flex-col items-center"
      style={{
        background: `linear-gradient(to bottom, #1F2937, #111827 ${50 + scrollPosition * 0.05}%)`,
      }}
    >
      {/* Logo */}
      <div className="mb-10">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
          <img
            src="/logo-black.png"
            alt="H Logo"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-4 w-full">
        {[{ id: "hero", label: "Home" }, { id: "recent-work", label: "Recent Work" }, { id: "experience", label: "Experience" }, { id: "contact", label: "Contact" }].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block py-2 px-4 text-center rounded-md transition ${
              activeSection === item.id
                ? "text-blue-400 bg-gray-800"
                : "hover:text-blue-400 hover:bg-gray-700 hover:shadow-lg"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Social Media Links */}
      <div className="mt-10 flex space-x-4 text-xl">
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

      {/* Footer */}
      <footer className="mt-auto text-center text-xs text-gray-500">
        <p className="mb-1">© HFT Consultancy</p>
      </footer>
    </div>
  );
};

export default Sidebar;
