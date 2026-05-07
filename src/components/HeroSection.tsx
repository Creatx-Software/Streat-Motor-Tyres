"use client";

import React from 'react';
import { Circle, PhoneIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const heroContentVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const heroImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: 24 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.18
    }
  }
};

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#191919] bg-cover bg-center -mt-28 pt-28"
      style={{ backgroundImage: "url('/assets/HeroBg.png')" }}>
      <div className="absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.8fr] gap-8 lg:gap-0 items-center">
          { /* Left Content */ }
          <motion.div
            className="text-center lg:text-left space-y-6"
            variants={heroContentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative top-10 sm:-top-5 lg:-top-6 inline-block">
              <motion.div className="inline-block" variants={heroItemVariants}>
                <span className="bg-[#FBB038]/20 backdrop-blur-sm text-[#FFE889] px-10 py-2 rounded-full text-sm font-inter font-semibold border-2 border-[#FBB038]/60">
                  Professional Tyre Repair
                </span>
              </motion.div>
            </div>

            <div className="h-10 sm:h-0" aria-hidden="true" />

            <motion.h1 variants={heroItemVariants} className="w-full lg:max-w-xl text-4xl lg:text-[3.8rem] xl:text-[4rem] font-inter font-bold text-[#FDCF12] leading-[1.2] tracking-[0.01em] px-10 lg:px-0">
              Marooned on a side of a road, at Home or Work?
            </motion.h1>

            <div className="relative top-0 sm:top-3 lg:top-4 inline-block">
              <motion.div variants={heroItemVariants} className="md:space-y-2">
                <p className="text-xl sm:text-2xl text-[#AEAEAE] font-inter font-semibold">
                  24/7 Emergency Tyre Repair Service.
                </p>
                <p className="text-lg sm:text-2xl font-inter font-semibold text-[#AEAEAE]">
                  We Come To You Within 1 hour
                </p>
              </motion.div>
            </div>

            <div className="relative top-0 sm:top-3 lg:top-4 inline-block">
              <motion.div variants={heroItemVariants} className="grid grid-cols-2 gap-4 pt-4 translate-y-8 justify-center lg:justify-start">
                <button className="w-full bg-[#8B16CC] text-white px-4 sm:px-8 py-3 rounded-md font-inter font-semibold text-sm sm:text-lg hover:bg-purple-800 transition-colors shadow-lg">
                  Get Instant Help
                </button>
                <a
                  href=""
                  className="w-full bg-[#FFD10F] text-black px-4 sm:px-8 py-3 rounded-md font-inter font-semibold text-sm sm:text-lg hover:bg-yellow-500 transition-colors shadow-lg flex items-center justify-center gap-2">
                
                  <PhoneIcon size={20} />
                  07960 902731
                </a>
              </motion.div>
            </div>

            <div className="relative top-0 sm:top-3 lg:top-4 inline-block">
              <motion.p variants={heroItemVariants} className="text-md font-inter font-regular text-[#FFD10F] flex items-center gap-2 pt-2 translate-y-10">
                <span className="text-[#FFD10F]">💡</span>
                The legal minimum tread depth is 1.6mm
            </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={heroImageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <img
              src="/assets/HeroVehicle.png"
              alt="Emergency Tyre Service Van"
              className="w-full h-auto scale-[1.1] lg:scale-[1.5]" />
            
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-[#191919] text-white md:py-4"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base font-inter font-regular text-[#AEAEAE] -translate-y-10 md:-translate-y-0">
            <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2" />
            Over 70 different tyre
            sizes available, in budget, semi budget and premium range.
          </p>
        </div>
      </motion.div>
    </section>);

}