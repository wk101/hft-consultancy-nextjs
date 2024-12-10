"use client";

import React from "react";
import { FaBars } from "react-icons/fa";

interface BurgerBarProps {
  toggleMenu: () => void;
}

const BurgerBar: React.FC<BurgerBarProps> = ({ toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="block text-white bg-gray-800 p-2 rounded-md shadow-md"
      aria-label="Toggle Mobile Menu"
    >
      <FaBars size={24} />
    </button>
  );
};

export default BurgerBar;
