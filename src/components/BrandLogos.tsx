import React from 'react';
export function BrandLogos() {
  const brandLogos = [
    { src: '/assets/Brand1.png', alt: 'Brand logo 1' },
    { src: '/assets/Brand2.png', alt: 'Brand logo 2' },
    { src: '/assets/Brand3.png', alt: 'Brand logo 3' },
    { src: '/assets/Brand4.png', alt: 'Brand logo 4' },
    { src: '/assets/Brand5.png', alt: 'Brand logo 5' },
    { src: '/assets/Brand6.png', alt: 'Brand logo 6' }
  ];

  const marqueeItems = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="bg-[#191919] -mt-px py-10 sm:py-8">
      <div className="brand-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="brand-marquee-track flex items-center gap-14 sm:gap-32 w-max">
          {marqueeItems.map((logo, index) =>
          <div key={`${logo.src}-${index}`} className="flex h-12 sm:h-16 lg:h-36 w-[140px] sm:w-[170px] lg:w-[190px] items-center justify-center shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain opacity-100"
                loading="eager"
              />
            </div>
          )}
        </div>
      </div>
    </section>);

}