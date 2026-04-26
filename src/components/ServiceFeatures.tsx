"use client";

import React from 'react';
import { Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const leftCardVariants: Variants = {
  hidden: { opacity: 0, x: -42 },
  show: {
    opacity: 1,
    x: 72,
    transition: { duration: 0.75, ease: 'easeOut' }
  }
};

const bottomCardVariants: Variants = {
  hidden: { opacity: 0, y: 42 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' }
  }
};

const rightCardVariants: Variants = {
  hidden: { opacity: 0, x: 64 },
  show: {
    opacity: 1,
    x: -60,
    y: -188,
    transition: { duration: 0.75, ease: 'easeOut' }
  }
};

export function ServiceFeatures() {

  return (
    <section id="tyre-guide" className="bg-white py-16 lg:py-0">
      <div className="mx-auto">
        <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center space-y-6 lg:max-w-xl 2xl:mx-auto px-4 sm:px-6 lg:px-0 lg:pr-10 -translate-y-20 lg:-translate-y-52">
            <h3 className="text-md font-inter font-semibold text-[#AEAEAE] tracking-wide">
              <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2 align-middle" />
              What We Do
            </h3>
            <h2 className="text-3xl font-inter font-semibold leading-tight text-[#2D2D2D] sm:text-4xl md:text-5xl">
              Fast & efficient tyre
              <br />
              service, with Peace
              <br />
              of Mind
            </h2>
          </div>

          <div className="relative min-h-[220px] overflow-hidden lg:min-h-[260px]">
            <img
              src="/assets/ServiceBg.png"
              alt="Service background"
              className="block h-full w-full object-contain object-right"
            />
          </div>
        </div>

        <motion.div
          className="relative z-10 mt-[-2rem] grid gap-0 md:mt-[-3rem] md:grid-cols-3 md:items-start lg:mt-[-28rem]"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.article variants={leftCardVariants} className="group mx-auto w-full max-w-[27rem] md:translate-x-16">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src="/assets/Repair.png"
                alt="Tyre Puncture Repair"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-16">
                <h3 className="text-lg font-inter font-semibold text-white">
                  Tyre Puncture Repair
                </h3>
                <p className="mt-4 text-sm leading-5 text-white font-inter font-regular">
                  Professional on-site puncture repairs that get you back on the road quickly.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article variants={bottomCardVariants} className="group mx-auto w-full max-w-[27rem] md:-translate-x-6">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src="/assets/Balancing.png"
                alt="Wheel Balancing"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-16">
                <h3 className="text-lg font-inter font-semibold text-white">
                  Wheel Balancing
                </h3>
                <p className="mt-4 text-sm leading-5 text-white font-inter font-regular">
                  Professional wheel balancing service to ensure smooth driving and extended tyre life.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article variants={rightCardVariants} className="group relative z-10 mx-auto w-full max-w-[25rem] md:-translate-x-4 lg:-translate-y-48 md:-translate-x-24 hover:z-20">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src="/assets/Replacement.png"
                alt="Tyre Replacement"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-10">
                <h3 className="text-lg font-inter font-semibold text-white">
                  Tyre Replacement
                </h3>
                <p className="mt-4 text-sm leading-5 text-white font-inter font-regular">
                  Full tyre replacement service with our mobile workshop. Quality tyres, installed Professionally.
                </p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>);

}