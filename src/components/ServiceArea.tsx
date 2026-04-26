"use client";

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const textVariants: Variants = {
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

export function ServiceArea() {
  return (
    <section
      className="py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/assets/MapBg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-32 lg:grid-cols-[1fr_2fr] lg:items-stretch">
          <div className="relative">
            <img
              src="/assets/Map.png"
              alt="M25 Service Area Map"
              className="h-auto w-full object-cover 2xl:scale-[1.4]" />
          </div>

          <div className="space-y-6">
            <motion.img
              src="/assets/M25.png"
              alt="M25"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="h-14 w-auto"
            />

            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              className="text-2xl sm:text-3xl font-inter font-semibold text-[#2D2D2D]"
            >
              We operate within the M25 region
            </motion.h2>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="text-xl text-[#2D2D2D] font-inter font-regular"
            >
              Including:  outer counties of
              <br />Surrey, Kent, Sussex, and Essex
            </motion.p>

          </div>
        </div>
      </div>
    </section>);

}