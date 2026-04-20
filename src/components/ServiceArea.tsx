import React from 'react';
export function ServiceArea() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
              alt="M25 Service Area Map"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-purple-900/20"></div>
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
              M25
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              We Operate Exclusively Inside The M25 London Region.
            </h2>

            <p className="text-lg text-gray-700">
              Including Outer Counties Of Surrey, Kent, Essex, Hertfordshire
            </p>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <p className="text-gray-700">
                Our mobile tyre fitting service covers all areas within the M25
                motorway, ensuring fast response times and convenient on-site
                service wherever you are in Greater London.
              </p>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Fast response times across all M25 zones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Coverage in Surrey, Kent, Essex, and Hertfordshire</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>24/7 emergency callout service available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

}