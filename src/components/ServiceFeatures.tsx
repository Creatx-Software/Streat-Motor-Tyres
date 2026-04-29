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
  show: (isLg: boolean) => ({
    opacity: 1,
    x: isLg ? 98 : 0,
    transition: { duration: 0.75, ease: 'easeOut' }
  })
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
  show: (isLg: boolean) => ({
    opacity: 1,
    x: isLg ? -96 : 0,
    y: isLg ? -28 : 0,
    transition: { duration: 0.75, ease: 'easeOut' }
  })
};

export function ServiceFeatures() {
  const [isLg, setIsLg] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateIsLg = () => setIsLg(mediaQuery.matches);

    updateIsLg();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateIsLg);
      return () => mediaQuery.removeEventListener('change', updateIsLg);
    }

    mediaQuery.addListener(updateIsLg);
    return () => mediaQuery.removeListener(updateIsLg);
  }, []);

  return (
    <section id="services" className="bg-white overflow-hidden">
      <div className="relative mx-auto min-h-[600px] lg:min-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0 hidden h-full w-full lg:block">
          <img
            src="/assets/ServiceBg.png"
            alt="Service background"
            className="block h-full w-full object-contain object-right"
          />
        </div>

        {/* Text Content and Cards Overlay */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-0 py-16 lg:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center space-y-6 lg:max-w-xl lg:ml-40 -translate-y-10 lg:translate-y-16">
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

            <div className="relative">
              <div className="absolute inset-y-0 -left-4 -right-4 sm:-left-6 sm:-right-6 lg:hidden">
                <img
                  src="/assets/ServiceBg.png"
                  alt="Service cards background"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <motion.div
                className="relative mx-auto z-10 mt-[-2rem] grid grid-cols-1 justify-items-center gap-0 md:mt-[0rem] md:items-end lg:mt-[0rem] lg:grid-cols-3 lg:justify-items-stretch overflow-hidden pt-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
              >
                <motion.article custom={isLg} variants={leftCardVariants} className="group relative z-10 hover:z-20 mx-auto w-full max-w-[27rem]">
                  <div className="relative overflow-hidden rounded-xl min-h-[200px] transform-gpu transition-transform duration-500 origin-center group-hover:scale-[1.02]">
                    <img
                      src="/assets/Repair.png"
                      alt="Tyre Puncture Repair"
                      className="h-full w-full object-contain"
                    />
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

                <motion.article variants={bottomCardVariants} className="group relative z-10 hover:z-20 mx-auto w-full max-w-[27rem]">
                  <div className="relative overflow-hidden rounded-xl min-h-[200px] transform-gpu transition-transform duration-500 origin-center group-hover:scale-[1.02]">
                    <img
                      src="/assets/Balancing.png"
                      alt="Wheel Balancing"
                      className="h-full w-full object-contain"
                    />
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

                <motion.article custom={isLg} variants={rightCardVariants} className="group relative z-10 hover:z-20 mx-auto w-full max-w-[25rem]">
                  <div className="relative overflow-hidden rounded-xl min-h-[300px] transform-gpu transition-transform duration-500 origin-center group-hover:scale-[1.02]">
                    <img
                      src="/assets/Replacement.png"
                      alt="Tyre Replacement"
                      className="h-full w-full object-contain"
                    />
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
          </div>
        </div>
      </div>
    </section>
  );
}