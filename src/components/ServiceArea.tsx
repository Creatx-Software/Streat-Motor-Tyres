import React from 'react';
export function ServiceArea() {
  return (
    <section
      className="py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/assets/MapBg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-32 lg:grid-cols-[1fr_2fr] lg:items-stretch">
          <div className="relative">
            <img
              src="/assets/Map.png"
              alt="M25 Service Area Map"
              className="h-auto w-full object-cover scale-[1.4]" />
          </div>

          <div className="space-y-6">
            <img
              src="/assets/M25.png"
              alt="M25"
              className="h-14 w-auto"
            />

            <h2 className="text-2xl sm:text-3xl font-inter font-semibold text-[#2D2D2D]">
              We operate within the M25 region
            </h2>

            <p className="text-xl text-[#2D2D2D] font-inter font-regular">
              Including:  outer counties of
              <br />Surrey, Kent, Sussex, and Essex
            </p>

          </div>
        </div>
      </div>
    </section>);

}