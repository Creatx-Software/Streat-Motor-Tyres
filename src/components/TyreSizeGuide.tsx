import React from 'react';
import { Circle } from 'lucide-react';
export function TyreSizeGuide() {
  return (
    <section id="tyre-guide" className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-md font-inter font-semibold text-[#AEAEAE] tracking-wide">
              <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2" />
              Size Chart
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold text-[#2D2D2D]">
              How To Read
              <br />Your Tyre Size
            </h2>
            <div className="space-y-4 max-w-lg">
              <p className="text-md text-[#6E6E6E] font-inter font-regular">
                Knowing your tyre size helps us serve you faster! Look on the side of your tyre for numbers like the example shown.
              </p>
              <p className="text-md text-[#6E6E6E] font-inter font-bold">
                Quick Tip: Take a photo of your tyre’s sidewall and send it to us – we’ll handle the rest!
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/Tyre Diagram.png"
              alt="Tyre Size Markings"
              className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>);

}