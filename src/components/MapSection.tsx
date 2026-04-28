"use client";

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Circle } from 'lucide-react';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  }
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export function MapSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        { /* Section Header */ }
        <motion.div
          className="text-left mb-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 variants={headerItemVariants} className="text-md font-inter font-semibold text-[#AEAEAE] tracking-wide mb-4">
            <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2 align-middle" />
            Our location
          </motion.h3>
          <motion.h2 variants={headerItemVariants} className="text-3xl sm:text-4xl font-inter font-semibold text-white">
            Find Us On Maps
          </motion.h2>
        </motion.div>

        <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl lg:h-[500px]">
          <iframe
            title="Streat Motor Location"
            src="https://www.google.com/maps?q=Streat+Motor+2+Linkfield+Cor,+Redhill+RH1+1BB&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>);

}