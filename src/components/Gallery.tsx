"use client";

import React from 'react';
import Link from 'next/link';
import { Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const galleryGridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08
    }
  }
};

const galleryItemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut'
    }
  }
};

export function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = React.useState(1);
  
  const images = [
  '/assets/gallery1.png',
  '/assets/gallery2.png',
  '/assets/gallery3.png',
  '/assets/gallery4.png',
  '/assets/gallery5.png'];

  return (
    <section id="gallery" className="bg-[#FBB038] py-0">
      <div className="overflow-hidden rounded-t-[7rem] bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="grid gap-6 md:grid-cols-3 md:grid-rows-2"
          variants={galleryGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex h-[220px] flex-col justify-between rounded-lg bg-white p-5 md:h-[170px]"
            variants={galleryItemVariants}
          >
            <div>
              <h3 className="text-md font-inter font-semibold text-[#AEAEAE] tracking-wide mb-4">
              <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2 align-middle" />
                Gallery
              </h3>
              <h3 className="text-2xl font-inter font-semibold leading-tight lg:text-4xl text-[#2D2D2D]">
                Every picture tells a story of tyres saved & Journeys Resumed.
              </h3>
            </div>
          </motion.div>

          {images.map((image, index) =>
          <motion.div
            key={index}
            variants={galleryItemVariants}
            className="relative h-[220px] overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-2xl cursor-pointer"
            onClick={() => {
              setSelectedImage(image);
              setSelectedIndex(index);
            }}>
            
              <img
              src={image}
              alt={`Tyre service ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity hover:opacity-100"></div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
        >
          <Link href="/gallery">
            <button className="border-2 border-[#B6B6B6] bg-white text-[#AEAEAE] px-8 py-3 rounded-lg font-inter font-semibold text-sm hover:scale-105 transition-colors">
              View More
            </button>
          </Link>
        </motion.div> 
      </div>
      </div>
      
      {/* Lightbox Modal */}
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
                setSelectedImage(images[selectedIndex - 1]);
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
          {selectedIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex + 1);
                setSelectedImage(images[selectedIndex + 1]);
              }}
              className="absolute right-4 text-white text-4xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              ›
            </button>
          )}
          
          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-lg font-inter font-regular bg-black/50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
          
          {/* Top Right Controls */}
          <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
            {/* Fullscreen Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen();
                } else {
                  document.exitFullscreen();
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
              }}
              className="text-white text-2xl hover:text-[#FDCF12] transition-colors bg-black/50 rounded-full p-2"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </section>);

}