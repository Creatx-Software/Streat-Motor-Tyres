"use client";

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '../../src/components/Navbar';

const galleryImages = [
  '/assets/gallery1.png',
  '/assets/gallery2.png',
  '/assets/gallery3.png',
  '/assets/gallery4.png',
  '/assets/gallery5.png',
  '/assets/gallery1.png',
  '/assets/gallery2.png',
  '/assets/gallery3.png',
  '/assets/gallery4.png',
  '/assets/gallery5.png',
];

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = React.useState(1);
  const [, setIsFullScreen] = React.useState(false);

  return (
    <main className="bg-white">
      <Navbar />
      {/* Header Section */}
      <section className="relative py-20 lg:py-20">
        <div className="absolute inset-0">
          <img
            src="/assets/HeroBg.png"
            alt="Hero background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="text-lg sm:text-xl font-inter font-regular mb-2"
            >
              <Link href="/" className="text-[#8B16CC] hover:text-purple-700 transition-colors">
                Home
              </Link>
              <span className="text-[#FDCF12] mx-2">»</span>
              <span className="text-[#FDCF12]">Gallery</span>
            </motion.p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-[#FDCF12] mb-4 translate-y-6">
              Gallery
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                onClick={() => {
                  setSelectedImage(image);
                  setSelectedIndex(index);
                }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div>
                    <h3 className="text-white font-inter font-semibold">
                      Service #{index + 1}
                    </h3>
                    <p className="text-[#FFE889] text-sm font-inter font-regular">
                      Professional Tyre Service
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#191919] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-inter font-bold text-[#FDCF12] mb-2">
                500+
              </h3>
              <p className="text-[#AEAEAE] font-inter font-regular">
                Successful Services
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-inter font-bold text-[#FDCF12] mb-2">
                24/7
              </h3>
              <p className="text-[#AEAEAE] font-inter font-regular">
                Emergency Support
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-inter font-bold text-[#FDCF12] mb-2">
                100%
              </h3>
              <p className="text-[#AEAEAE] font-inter font-regular">
                Customer Satisfaction
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-bold text-[#2D2D2D] mb-6">
              Need Emergency Tyre Service?
            </h2>
            <p className="text-lg text-[#AEAEAE] font-inter font-regular mb-8 max-w-2xl mx-auto">
              Contact us today for fast, reliable tyre repair and replacement services available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07960902731"
                className="bg-[#8B16CC] text-white px-8 py-3 rounded-md font-inter font-semibold text-lg hover:bg-purple-800 transition-colors shadow-lg"
              >
                Call Now
              </a>
              <Link href="/#contact">
                <button className="bg-[#FFD10F] text-black px-8 py-3 rounded-md font-inter font-semibold text-lg hover:bg-yellow-500 transition-colors shadow-lg">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {selectedImage && selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null);
            setSelectedIndex(null);
            setZoomLevel(1);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Navigation Arrow - Previous */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex - 1);
                setSelectedImage(galleryImages[selectedIndex - 1]);
              }}
              className="absolute left-4 text-white text-4xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              ‹
            </button>
          )}
          
          {/* Main Image */}
          <motion.div
            className="relative max-w-[80vw] max-h-[80vh] rounded-none"
            style={{ cursor: zoomLevel > 1 ? 'move' : 'default' }}
          >
            <motion.img
              src={selectedImage}
              alt={`Gallery image ${selectedIndex + 1}`}
              className="max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain rounded-none"
              initial={{ scale: 0.9 }}
              animate={{ 
                scale: zoomLevel,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              onClick={(e) => e.stopPropagation()}
              drag={zoomLevel > 1}
              dragMomentum={false}
              dragElastic={0.1}
              onDrag={(event, info) => {
                if (zoomLevel > 1) {
                  const img = event.currentTarget as HTMLImageElement;
                  img.style.transform = `scale(${zoomLevel}) translate(${info.offset.x}px, ${info.offset.y}px)`;
                }
              }}
            />
          </motion.div>
          
          {/* Navigation Arrow - Next */}
          {selectedIndex < galleryImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex + 1);
                setSelectedImage(galleryImages[selectedIndex + 1]);
              }}
              className="absolute right-4 text-white text-4xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              ›
            </button>
          )}
          
          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-lg font-inter font-regular bg-black/50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
          
          {/* Top Right Controls */}
          <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
            {/* Fullscreen Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen();
                  setIsFullScreen(true);
                } else {
                  document.exitFullscreen();
                  setIsFullScreen(false);
                }
              }}
              className="text-white text-xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 4.414V7a1 1 0 01-2 0V4zM16 16a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V11a1 1 0 012 0v4z"/>
              </svg>
            </button>
            
            {/* Zoom Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomLevel(zoomLevel === 1 ? 2 : 1);
              }}
              className="text-white text-xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"/>
                <path fillRule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd"/>
              </svg>
            </button>
            
            {/* Share Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({
                    title: 'Gallery Image',
                    text: `Check out this image from Streat Tyres Gallery - Image ${selectedIndex + 1}`,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="text-white text-xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
            </button>
            
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedIndex(null);
                setZoomLevel(1);
                setIsFullScreen(false);
              }}
              className="text-white text-2xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </main>
  );
}
