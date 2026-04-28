"use client";

import React from 'react';
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
            className="relative h-[220px] overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
            
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
          <button className="border border-[#B6B6B6] bg-white text-[#AEAEAE] px-8 py-3 rounded-lg font-inter font-semibold hover:scale-105 transition-colors">
            View More
          </button>
        </motion.div> 
      </div>
      </div>
    </section>);

}