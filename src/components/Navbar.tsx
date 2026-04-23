"use client";

import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 gap-16">
          <div className="flex-shrink-0">
            <img
              src="/Logo.png"
              alt="Streat Motor Tyres"
              className="h-12 w-auto" />
            
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-start space-x-12">
            <a
              href="#services"
              className="hover:text-yellow-400 transition-colors font-semibold">
              
              SERVICES
            </a>
            <a
              href="#buy-tyres"
              className="hover:text-yellow-400 transition-colors font-semibold">
              
              SIZE GUIDE
            </a>
            <a
              href="#reviews"
              className="hover:text-yellow-400 transition-colors font-semibold">
              
              WHY US
            </a>
            <a
              href="#gallery"
              className="hover:text-yellow-400 transition-colors font-semibold">
              
              GALLERY
            </a>
          </div>

          <div className="hidden lg:block ml-auto">
            <a
              href="tel:07960902731"
              className="bg-[#FFD10F] text-[#1C1C1E] px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
              
              Emergency : Call Now
            </a>
          </div>

          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu">
              
              {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen &&
      <div className="lg:hidden bg-[#1a1a2e] border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#services" className="block py-2 hover:text-yellow-400">
              SERVICES
            </a>
            <a href="#buy-tyres" className="block py-2 hover:text-yellow-400">
              SIZE GUIDE
            </a>
            <a href="#reviews" className="block py-2 hover:text-yellow-400">
              WHY US
            </a>
            <a href="#gallery" className="block py-2 hover:text-yellow-400">
              GALLERY
            </a>
            <a
            href="tel:07960902731"
            className="block bg-[#FFD10F] text-[#1C1C1E] px-6 py-3 rounded-full font-bold text-center mt-4">
            
              Emergency : Call Now
            </a>
          </div>
        </div>
      }
    </nav>);

}