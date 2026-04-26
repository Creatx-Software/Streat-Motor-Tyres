import React from 'react';
import { Circle } from 'lucide-react';
export function ServiceFeatures() {

  return (
    <section id="tyre-guide" className="bg-white py-16 lg:py-0">
      <div className="mx-auto">
        <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center space-y-6 lg:max-w-xl mx-auto px-4 sm:px-6 lg:px-0 lg:pr-10 lg:-translate-y-52">
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

        <div className="relative z-10 mt-[-2rem] grid gap-0 md:mt-[-3rem] md:grid-cols-3 md:items-start lg:mt-[-28rem]">
          <article className="group mx-auto w-full max-w-[24.5rem] md:translate-x-12">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src="/assets/Repair.png"
                alt="Tyre Puncture Repair"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-10">
                <h3 className="text-lg font-inter font-semibold text-white">
                  Tyre Puncture Repair
                </h3>
                <p className="mt-1 text-xs leading-5 text-white/90">
                  Professional on-site puncture repairs that get you back on the road quickly.
                </p>
              </div>
            </div>
          </article>

          <article className="group mx-auto w-full max-w-[24.5rem] md:-translate-x-12">
            <div className="relative overflow-hidden rounded-xl min-h-[180px]">
              <img
                src="/assets/Balancing.png"
                alt="Wheel Balancing"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-10">
                <h3 className="text-lg font-inter font-semibold text-white">
                  Wheel Balancing
                </h3>
                <p className="mt-1 text-xs leading-5 text-white/90">
                  Professional wheel balancing service to ensure smooth driving and extended tyre life.
                </p>
              </div>
            </div>
          </article>

          <article className="group mx-auto w-full max-w-[24rem] md:-translate-x-4 lg:-translate-y-48 md:-translate-x-28">
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
                <p className="mt-1 text-xs leading-5 text-white/90">
                  Full tyre replacement service with our mobile workshop. Quality tyres, installed professionally.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>);

}