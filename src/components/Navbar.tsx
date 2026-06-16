"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const sections = ['services', 'tyre-guide', 'reviews', 'gallery', 'faq', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set home as active if at the top
    const handleTopScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleTopScroll);
    handleTopScroll();

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleTopScroll);
    };
  }, [isHomePage]);
  return (
    <nav className={`sticky top-0 z-50 text-white transition-all duration-300 ${
      isScrolled ? 'bg-[#000000]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28 gap-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/Logo-23851.svg"
                alt="Streat Motor Tyres"
                className="h-16 w-auto lg:scale-[1.1] cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-start space-x-12">
            <Link
              href="/"
              className={`hover:text-yellow-400 transition-colors font-semibold ${
                (pathname === '/' && activeSection === 'home') || (pathname === '/' && !activeSection)
                  ? 'text-yellow-400'
                  : ''
              }`}>

              HOME
            </Link>
            <Link
              href={isHomePage ? "#services" : "/#services"}
              className={`hover:text-yellow-400 transition-colors font-semibold ${
                activeSection === 'services' ? 'text-yellow-400' : ''
              }`}>

              SERVICES
            </Link>
            <Link
              href={isHomePage ? "#tyre-guide" : "/#tyre-guide"}
              className={`hover:text-yellow-400 transition-colors font-semibold ${
                activeSection === 'tyre-guide' ? 'text-yellow-400' : ''
              }`}>

              SIZE GUIDE
            </Link>
            <Link
              href={isHomePage ? "#reviews" : "/#reviews"}
              className={`hover:text-yellow-400 transition-colors font-semibold ${
                activeSection === 'reviews' ? 'text-yellow-400' : ''
              }`}>

              WHY US
            </Link>
            <Link
              href={isHomePage ? "#gallery" : "/#gallery"}
              className={`hover:text-yellow-400 transition-colors font-semibold ${
                activeSection === 'gallery' ? 'text-yellow-400' : ''
              }`}>

              GALLERY
            </Link>
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
              {["HOME", "SERVICES", "SIZE GUIDE", "WHY US", "GALLERY"].map((label, index) => {
              const hrefs = ['/', '#services', '#tyre-guide', '#reviews', '#gallery'];
              const sectionIds = ['home', 'services', 'tyre-guide', 'reviews', 'gallery'];
              const href = label === "HOME" ? "/" : (isHomePage ? hrefs[index] : `/${hrefs[index]}`);
              const isActive = activeSection === sectionIds[index] ||
                               (label === "HOME" && pathname === '/' && (!activeSection || activeSection === 'home'));
              return (
                <motion.div
                  key={label}
                  variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={href}
                    className={`block py-2 hover:text-yellow-400 transition-colors ${
                      isActive ? 'text-yellow-400' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>);

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