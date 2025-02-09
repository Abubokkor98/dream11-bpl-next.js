"use client";
import { useContext } from "react";
import { CoinContext } from "../CoinsProvider";
import { useState } from "react";
import { FaBars, FaCoins, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { coins } = useContext(CoinContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/80">
      <div className="p-4 px-4 flex items-center justify-between">
        {/* Logo and Coins */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto rounded-lg" />
          <div className="flex items-center space-x-1 text-yellow-600">
            <span className="font-semibold">{coins}</span>
            <span>Coins</span>
            <FaCoins className="text-yellow-500" />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-base font-medium text-gray-700">
          <li><a href="">Home</a></li>
          <li><a href="">Fixture</a></li>
          <li><a href="">Teams</a></li>
          <li><a href="">Schedules</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button className="p-2 border rounded" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Show close or open icon */}
          </button>
        </div>
      </div>

      {/* Drawer Background (Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMenu}
      ></div>

      {/* Slide-in Drawer from Right */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4">
          <ul className="space-y-4 text-base font-medium text-gray-700">
            <li><a href="">Home</a></li>
            <li><a href="">Fixture</a></li>
            <li><a href="">Teams</a></li>
            <li><a href="">Schedules</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
