import React from 'react';
export function BrandLogos() {
  const brands = ['GOODYEAR', 'MICHELIN', 'PIRELLI', 'HANKOOK'];
  return (
    <section className="bg-[#1a1a2e] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand) =>
          <div key={brand} className="text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wider">
                {brand}
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>);

}