"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MinusIcon, PlusIcon, Circle } from 'lucide-react';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
  {
    question: 'Do you replace all types of tyres?',
    answer:
    'Yes, we service all car, SUV, and light commercial vehicle tyres. Our team will confirm fitment before dispatch.'
  },
  {
    question: 'How much does a tyre replacement cost?',
    answer:
    'Tyres starting from low as £50 depending on the brand plus call out charges based on location and time of day.'
  },
  {
    question: 'What services do you offer on-site?',
    answer:
    'Our mobile service offers all types of puncture repair, wheel balancing and tyre replacement. Our Redhill workshop offer a one-stop solution from tyres, MOT, Service and Repairs, Wheel alignment, Bodyshop plus many more'
  }];

  return (
    <section id="faq" className="bg-gradient-to-b from-[#A800FF] to-[#000000] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.h3
              className="text-md font-inter font-semibold text-white tracking-wide mb-6"
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Circle size={16} fill="white" stroke="white" className="inline-block mr-2 align-middle" />
              Common Queries
            </motion.h3>
            <motion.h2
              className="text-3xl sm:text-4xl font-inter font-semibold text-white mb-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.06 }}
            >
              Frequently Asked <br />Questions
            </motion.h2>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {faqs.map((faq, index) =>
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-transparent overflow-hidden border-y border-[#AEAEAE]"
              >
                <button
                  onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-6 flex justify-between items-center text-left transition-colors"
                >
                  <span className="text-white font-inter font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="text-white flex-shrink-0"
                  >
                    {openIndex === index ?
                    <MinusIcon size={24} /> :
                    <PlusIcon size={24} />

                    }
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index &&
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-white font-inter font-regular">{faq.answer}</div>
                  </motion.div>
                  }
                </AnimatePresence>
              </motion.div>
              )}
            </motion.div>

            <motion.div
              className="mt-6 px-5 py-4 text-[#FFD10F] font-inter font-regular"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            >
              <p className="font-inter text-sm leading-relaxed sm:text-base">
                <span className="mr-2">💡</span>
                NHS, Police, Fire brigade staff get 10% discount on production of a valid ID.
              </p>
            </motion.div>
          </div>

          {/* Contact Us Card */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="relative min-h-[400px] overflow-hidden rounded-xl">
                <img
                  src="/assets/faq.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
                />
                <div className="relative z-10 flex h-full min-h-[400px] flex-col p-8 text-left">
                  <h3 className="text-2xl font-inter font-semibold text-white">
                    Still Have <br />Questions?
                  </h3>
                  <button className="absolute bottom-0 right-0 rounded-md bg-[#FEC42D] px-10 py-4 font-inter font-medium text-[#2D2D2D] transition-colors hover:scale-105">
                    CONTACT US
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}