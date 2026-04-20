"use client";

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
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
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>

            {faqs.map((faq, index) =>
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
              
                <button
                onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors">
                
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ?
                <ChevronUpIcon
                  className="text-yellow-400 flex-shrink-0"
                  size={24} /> :


                <ChevronDownIcon
                  className="text-yellow-400 flex-shrink-0"
                  size={24} />

                }
                </button>
                {openIndex === index &&
              <div className="px-6 pb-4 text-purple-100">{faq.answer}</div>
              }
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-8 text-center space-y-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900">
                Still Have Questions?
              </h3>
              <p className="text-gray-800">
                Our team is ready to help you with any queries you may have.
              </p>
              <button className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-800 transition-colors w-full">
                CONTACT US
              </button>
              <div className="pt-4 border-t border-orange-600">
                <p className="text-sm text-gray-800 mb-2">
                  Or call us directly:
                </p>
                <a
                  href="tel:07960902731"
                  className="text-2xl font-bold text-purple-900">
                  
                  07960 902731
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}