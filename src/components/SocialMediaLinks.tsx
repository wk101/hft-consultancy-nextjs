"use client";

import React from "react";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 text-xl">
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
  );
};

export default SocialMediaLinks;
