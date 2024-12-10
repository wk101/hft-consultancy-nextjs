"use client";

import React from "react";

interface MenuProps {
  isMobileMenuOpen: boolean;
  closeMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isMobileMenuOpen, closeMenu }) => {
  const links = [
    { id: "hero", label: "Home" },
    { id: "recent-work", label: "Recent Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`${
        isMobileMenuOpen
          ? "flex flex-col items-center space-y-4"
          : "flex space-x-6"
      }`}
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={closeMenu}
          className="py-2 px-4 rounded-md transition hover:text-blue-400 hover:bg-gray-700"
          aria-label={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Menu;
