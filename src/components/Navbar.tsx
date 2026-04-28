"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

              <motion.span
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex"
              >
                {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
              </motion.span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen &&
        <motion.div
          className="lg:hidden bg-[#1a1a2e] border-t border-gray-700 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
              className="px-4 pt-2 pb-4 space-y-3"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -8 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.05,
                    staggerChildren: 0.04
                  }
                }
              }}
            >
              {["SERVICES", "SIZE GUIDE", "WHY US", "GALLERY"].map((label, index) => {
              const hrefs = ['#services', '#buy-tyres', '#reviews', '#gallery'];
              return (
                <motion.a
                  key={label}
                  href={hrefs[index]}
                  className="block py-2 hover:text-yellow-400"
                  variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
                >
                  {label}
                </motion.a>);

            })}
              <motion.a
                href="tel:07960902731"
                className="block bg-[#FFD10F] text-[#1C1C1E] px-6 py-3 rounded-full font-bold text-center mt-4"
                variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
              >
                Emergency : Call Now
              </motion.a>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}