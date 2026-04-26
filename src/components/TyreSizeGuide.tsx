"use client";

import React from 'react';
import { Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

export function TyreSizeGuide() {
  return (
    <section id="tyre-guide" className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.h3 variants={itemVariants} className="text-md font-inter font-semibold text-[#AEAEAE] tracking-wide">
              <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2" />
              Size Chart
            </motion.h3>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold text-[#2D2D2D]">
              How To Read
              <br />Your Tyre Size
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-4 max-w-lg">
              <p className="text-md text-[#6E6E6E] font-inter font-regular">
                Knowing your tyre size helps us serve you faster! Look on the side of your tyre for numbers like the example shown.
              </p>
              <p className="text-md text-[#6E6E6E] font-inter font-bold">
                Quick Tip: Take a photo of your tyre’s sidewall and send it to us – we’ll handle the rest!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
          >
            <img
              src="/assets/Tyre Diagram.png"
              alt="Tyre Size Markings"
              className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>);

}