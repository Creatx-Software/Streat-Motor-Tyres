import React from 'react';
import { PhoneIcon } from 'lucide-react';
export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/HeroBg.png')" }}>
      <div className="absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 -translate-y-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          <div className="text-left space-y-6">
            <div className="inline-block -translate-y-4">
              <span className="bg-[#FBB038]/20 backdrop-blur-sm text-[#FFE889] px-6 py-2 rounded-full text-sm font-inter font-semibold border border-[#FBB038]/60">
                Professional Tyre Repair
              </span>
            </div>

            <h1 className="max-w-[20ch] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold text-[#FDCF12] leading-[1.45] tracking-[0.08em]">
              Marooned on a side of a road, at Home or Work?
            </h1>

            <div className="space-y-2 translate-y-3">
              <p className="text-xl sm:text-2xl text-[#AEAEAE] font-inter font-semibold">
                24/7 Emergency Tyre Repair Service.
              </p>
              <p className="text-lg sm:text-2xl font-inter font-semibold text-[#AEAEAE]">
                We Come To You Within 1 hour
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#8B16CC] text-white px-8 py-3 rounded-md font-inter font-semibold text-lg hover:bg-purple-800 transition-colors shadow-lg">
                Get Instant Help
              </button>
              <a
                href=""
                className="bg-[#FFD10F] text-black px-8 py-3 rounded-md font-inter font-semibold text-lg hover:bg-yellow-500 transition-colors shadow-lg flex items-center justify-center gap-2">
                
                <PhoneIcon size={20} />
                07960 902731
              </a>
            </div>

            <p className="text-md font-inter font-regular text-[#FBB038] flex items-center gap-2 pt-2">
              <span className="text-[#FBB038]">💡</span>
              The legal minimum tread depth is 1.6mm
            </p>
          </div>

          <div className="relative">
            <img
              src="/assets/HeroVehicle.png"
              alt="Emergency Tyre Service Van"
              className="w-full h-auto scale-[1.2]" />
            
          </div>
        </div>
      </div>

      <div className="bg-[#191919] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base">
            <span className="text-[#8B16CC]">●</span> Over 70 different tyre
            sizes available, in budget, semi budget and premium range.
          </p>
        </div>
      </div>
    </section>);

}