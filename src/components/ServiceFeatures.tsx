import React from 'react';
import { WrenchIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react';
export function ServiceFeatures() {
  const features = [
  {
    icon: WrenchIcon,
    title: 'Tyre Fitting',
    description:
    'Professional fitting service at your location with all necessary equipment',
    image:
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Tyre Repair',
    description:
    'Expert puncture repairs following industry safety standards',
    image:
    'https://images.unsplash.com/photo-1632823469770-73735e4aaaf6?w=600&q=80'
  },
  {
    icon: ClockIcon,
    title: 'Tyre Replacement',
    description:
    'Quick replacement service with quality tyres from leading brands',
    image:
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80'
  }];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fast & Efficient Tyre Service, Peace Guaranteed
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional mobile tyre services delivered with expertise and care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}