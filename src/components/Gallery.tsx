import React from 'react';
export function Gallery() {
  const images = [
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80',
  'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&q=80',
  'https://images.unsplash.com/photo-1632823469770-73735e4aaaf6?w=600&q=80',
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
  'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&q=80',
  'https://images.unsplash.com/photo-1449130015084-2dc954a6d51f?w=600&q=80'];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Every picture tells a story of tyres saved & Journeys Resumed.
          </h2>
          <p className="text-gray-600 text-lg">Our work in action</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) =>
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
            
              <img
              src={image}
              alt={`Tyre service ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>);

}