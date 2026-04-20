import React from 'react';
import { ClockIcon, MapPinIcon, ZapIcon } from 'lucide-react';
export function MobileService() {
  const benefits = [
  {
    icon: ClockIcon,
    title: '24/7 Service Available',
    description:
    'Round-the-clock emergency tyre service whenever you need us'
  },
  {
    icon: MapPinIcon,
    title: 'On-Site Convenience',
    description: 'We come to you - at home, work, or roadside'
  },
  {
    icon: ZapIcon,
    title: 'Quick Turnaround',
    description: 'Fast, efficient service to get you back on the road'
  }];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Your Tyre Problem Fixed Right Where You Are
            </h2>
            <p className="text-lg text-gray-700">
              No need to visit a garage or wait in line. Our fully equipped
              mobile units bring professional tyre services directly to your
              location, saving you time and hassle.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re stuck on the roadside, at home, or at your
              workplace, our expert technicians arrive with everything needed to
              get you moving again quickly and safely.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 font-medium">
                ⚡ Average response time: Under 60 minutes within the M25
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl text-white space-y-3 hover:shadow-2xl transition-shadow">
                  
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="text-purple-100 text-sm">
                    {benefit.description}
                  </p>
                </div>);

            })}
            <div className="sm:col-span-2 relative h-48 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1632823469770-73735e4aaaf6?w=800&q=80"
                alt="Mobile Service"
                className="w-full h-full object-cover" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}