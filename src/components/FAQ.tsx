"use client";

import React, { useState } from 'react';
import { MinusIcon, PlusIcon, Circle } from 'lucide-react';
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
  {
    question: 'Do you supply all types of tyres?',
    answer:
    'Yes, we stock a comprehensive range of tyres from budget to premium brands including Michelin, Pirelli, Goodyear, and Hankook. We have over 70 different tyre sizes available to fit most vehicles.'
  },
  {
    question: 'Can I book an appointment online?',
    answer:
    'Absolutely! You can book through our online form, call us directly, or message us on WhatsApp. We offer flexible scheduling to suit your convenience, including same-day emergency services.'
  },
  {
    question: 'How long does a tyre fitting take?',
    answer:
    'A standard tyre fitting typically takes 30-45 minutes per tyre. For emergency roadside assistance, we aim to have you back on the road within an hour of arrival.'
  },
  {
    question: 'Are there any hidden charges?',
    answer:
    'No hidden charges whatsoever. We provide transparent pricing upfront, including the tyre cost, fitting, balancing, and disposal of old tyres. What we quote is what you pay.'
  }];

  return (
    <section id="faq" className="bg-gradient-to-b from-[#A800FF] to-[#000000] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-md font-inter font-semibold text-white tracking-wide mb-6">
              <Circle size={16} fill="white" stroke="white" className="inline-block mr-2 align-middle" />
              Common Queries
            </h3>
            <h2 className="text-3xl sm:text-4xl font-inter font-semibold text-white mb-8">
              Frequently Asked <br />Questions
            </h2>

            {faqs.map((faq, index) =>
            <div
              key={index}
              className="bg-transparent overflow-hidden border-y border-[#AEAEAE]">
              
                <button
                onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-6 flex justify-between items-center text-left transition-colors">
                
                  <span className="text-white font-inter font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ?
                <MinusIcon
                  className="text-white flex-shrink-0"
                  size={24} /> :


                <PlusIcon
                  className="text-white flex-shrink-0"
                  size={24} />

                }
                </button>
                {openIndex === index &&
              <div className="px-6 pb-4 text-white font-inter font-regular">{faq.answer}</div>
              }
              </div>
            )}

            <div className="mt-6 px-5 py-4 text-[#FFD10F] font-inter font-regular">
              <p className="font-inter text-sm leading-relaxed sm:text-base">
                <span className="mr-2">💡</span>
                NHS, Police, Fire brigade staff get 10% discount on production of a valid ID.
              </p>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
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
            </div>
          </div>
        </div>
      </div>
    </section>);

}