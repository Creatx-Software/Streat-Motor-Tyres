import React from 'react';
import { Circle } from 'lucide-react';
export function MapSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h3 className="text-md font-inter font-semibold text-[#AEAEAE] tracking-wide mb-4">
            <Circle size={16} fill="#8B16CC" stroke="#8B16CC" className="inline-block mr-2 align-middle" />
            Workshop location
          </h3>
          <h2 className="text-3xl sm:text-4xl font-inter font-semibold text-white">
            Find Us On Maps
          </h2>
        </div>

        <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl lg:h-[500px]">
          <iframe
            title="Streat Motor Location"
            src="https://www.google.com/maps?q=Streat+Motor+2+Linkfield+Cor,+Redhill+RH1+1BB&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>);

}