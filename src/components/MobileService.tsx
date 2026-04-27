"use client";

import React from 'react';
import { ClockIcon, MapPinIcon, ZapIcon, Circle } from 'lucide-react';
export function MobileService() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const benefits = [
  {
    icon: ClockIcon,
    title: '24/7 Service Available',
    description:
    'Round-the-clock emergency tyre service whenever you need us'
  },
  {
    icon: MapPinIcon,
    title: 'On-Site Convenience',
    description: 'We come to you - at home, work, or roadside'
  },
  {
    icon: ZapIcon,
    title: 'Quick Turnaround',
    description: 'Fast, efficient service to get you back on the road'
  }];

  return (
    <section className="py-16 bg-[#F8EAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-md font-inter font-semibold text-[#C69BDD] tracking-wide">
                <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2 align-middle" />
                Why Choose Us
              </h3>
            <h2 className="text-3xl sm:text-4xl font-inter font-semibold text-[#2D2D2D] max-w-sm">
              Your Tyre Problem Fixed Right Where You Are
            </h2>
            <p className="text-lg text-[#6E6E6E] font-inter font-regular">
              Whether it’s midnight on a lonely road, motorway or midday in a bustling car park, we come to you home, work, the shops, or wherever life finds you.
            </p>
          </div>

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
                  className={`group relative min-h-[220px] space-y-4 rounded-xl p-8 text-left transition-all duration-300 sm:min-h-[240px] ${
                    isActive
                      ? 'z-20 bg-[#1F0030] text-white scale-[1.06] shadow-[0_16px_35px_rgba(31,0,48,0.28)]'
                      : 'z-0 bg-white text-[#2D2D2D] scale-100 shadow-sm hover:shadow-md'
                  }`}>
                  
                  <div className={`flex h-14 w-14 items-center justify-center rounded-lg transition-colors duration-300 ${isActive ? 'bg-white/20' : 'bg-[#F3E6FA]'}`}>
                    <Icon size={28} className="text-[#FFB235]" />
                  </div>
                  <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-[#2D2D2D]'}`}>{benefit.title}</h3>
                  <p className={`text-sm ${isActive ? 'text-purple-100' : 'text-[#6E6E6E]'}`}>
                    {benefit.description}
                  </p>
                </button>);

            })}
          </div>
        </div>
      </div>
    </section>);

}