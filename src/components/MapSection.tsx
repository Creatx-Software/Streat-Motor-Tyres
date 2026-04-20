import React from 'react';
export function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Find Us On Maps
          </h2>
          <p className="text-gray-600 mt-2">Serving all areas within the M25</p>
        </div>

        <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
            alt="Service Area Map"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-purple-900/10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
            <p className="font-bold text-purple-900">📍 M25 Coverage Area</p>
          </div>
        </div>
      </div>
    </section>);

}