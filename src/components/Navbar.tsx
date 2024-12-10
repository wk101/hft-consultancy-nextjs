"use client";

import React, { useState } from "react";
import BurgerBar from "./BurgerBar";
import Menu from "./Menu";
import SocialMediaLinks from "./SocialMediaLinks";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-between items-center p-4 z-50">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/logo-black.png" alt="Logo" className="object-contain w-full h-full" />
          </div>
        </div>

        {/* Large Screens: Center Menu Items */}
        <div className="hidden lg:flex items-center justify-center w-full space-x-6">
          <Menu isMobileMenuOpen={false} closeMenu={() => {}} />
        </div>

        {/* Large Screens: Align Social Media Icons to the Right */}
        <div className="hidden lg:flex justify-end space-x-4">
          <SocialMediaLinks />
        </div>

        {/* Small Screens: Show BurgerBar */}
        <div className="lg:hidden">
          <BurgerBar toggleMenu={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu (Visible only on small screens when toggled) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 flex flex-col space-y-4 z-40">
          <Menu
            isMobileMenuOpen={isMobileMenuOpen}
            closeMenu={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
