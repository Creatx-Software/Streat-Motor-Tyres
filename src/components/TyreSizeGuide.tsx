import React from 'react';
export function TyreSizeGuide() {
  return (
    <section id="tyre-guide" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How To Read Your Tyre Size
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Finding your tyre size is simple. Look at the sidewall of your
                current tyre - you&apos;ll see a series of numbers and letters.
              </p>
              <p>
                A typical tyre size looks like this:{' '}
                <strong className="text-purple-600">205/55 R16 91V</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>205</strong> - Width of the tyre in millimeters
                </li>
                <li>
                  <strong>55</strong> - Aspect ratio (height as % of width)
                </li>
                <li>
                  <strong>R16</strong> - Radial construction, 16-inch rim
                  diameter
                </li>
                <li>
                  <strong>91V</strong> - Load index and speed rating
                </li>
              </ul>
              <p className="text-sm text-gray-600 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                💡 <strong>Tip:</strong> You can also find this information in
                your vehicle&apos;s manual or on a sticker inside the driver&apos;s door
                frame.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&q=80"
              alt="Tyre Size Markings"
              className="w-full h-auto rounded-lg shadow-xl" />
            
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              205/55 R16
            </div>
          </div>
        </div>
      </div>
    </section>);

}