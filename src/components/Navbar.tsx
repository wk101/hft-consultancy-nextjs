"use client";

import React, { useState } from "react";
import Image from "next/image";
import BurgerBar from "./client/BurgerBar";
import Menu from "./Menu";
import SocialMediaLinks from "./SocialMediaLinks";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-10 h-10 bg-white rounded-full shadow-lg overflow-hidden">
            <Image
              src="/logo-black.png"
              alt="Company Logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
        </div>

        {/* Centered Menu Items for Large Screens */}
        <div className="hidden lg:flex items-center justify-center w-full space-x-6">
          <Menu isMobileMenuOpen={false} closeMenu={() => {}} />
        </div>

        {/* Social Media Icons for Large Screens */}
        <div className="hidden lg:flex justify-end space-x-4">
          <SocialMediaLinks />
        </div>

        {/* Burger Menu for Small Screens */}
        <div className="lg:hidden">
          <BurgerBar toggleMenu={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 flex flex-col space-y-4 z-40">
          <Menu
            isMobileMenuOpen={isMobileMenuOpen}
            closeMenu={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
