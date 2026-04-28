"use client";

import React from 'react';
import { Check, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const leftContentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
      staggerChildren: 0.12
    }
  }
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut'
    }
  }
};

export function MobileService() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const benefits = [
  {
    icon: Check,
    title: '60 Min Response',
    description:
    'We understand the stress of being stranded. that is why we move quickly, so you can feel safe and supported'
  },
  {
    icon: Check,
    title: 'Fully Insured',
    description: 'Complete insurance coverage and qualified technicians give you total peace of mind.'
  },
  {
    icon: Check,
    title: 'Our Commitment',
    description: 'Day or Night, Near or Far.You are Never Left Stuck and Marooned'
  }];

  return (
    <section id="why-us" className="py-28 bg-[#F8EAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          { /* Left Content */ }
          <motion.div
            className="space-y-6"
            variants={leftContentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h3 variants={leftItemVariants} className="text-md font-inter font-semibold text-[#C69BDD] tracking-wide">
                <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2 align-middle" />
                Why Choose Us
              </motion.h3>
            <motion.h2 variants={leftItemVariants} className="text-3xl sm:text-4xl font-inter font-semibold text-[#2D2D2D] max-w-sm">
              Your Tyre Problem Fixed Right Where You Are
            </motion.h2>
            <motion.p variants={leftItemVariants} className="text-sm text-[#6E6E6E] font-inter font-regular max-w-sm">
              Whether it’s midnight on a lonely road, motorway or midday in a bustling car park, we come to you home, work, the shops, or wherever life finds you.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  type="button"
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative min-h-[220px] space-y-4 rounded-3xl p-8 text-left transition-all duration-300 sm:min-h-[240px] ${
                    isActive
                      ? 'z-20 bg-[#1F0030] text-white scale-[1.08] shadow-[0_16px_35px_rgba(31,0,48,0.28)]'
                      : 'z-0 bg-white text-[#2D2D2D] scale-100 shadow-sm hover:shadow-md'
                  }`}>
                  
                  <div className={`flex h-14 w-14 items-center justify-center rounded-lg transition-colors duration-300 bg-transparent`}>
                    <Icon size={40} className="text-[#FFB235]" />
                  </div>
                  <h3 className={`text-lg font-inter font-semibold ${isActive ? 'text-white' : 'text-[#2D2D2D]'}`}>{benefit.title}</h3>
                  <p className={`text-sm font-inter font-regular ${isActive ? 'text-purple-100' : 'text-[#6E6E6E]'}`}>
                    {benefit.description}
                  </p>
                </button>);

            })}
          </div>
        </div>
      </div>
    </section>);

}