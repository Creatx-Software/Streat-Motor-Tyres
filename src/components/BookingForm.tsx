"use client";

import React, { useState } from 'react';
export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tyreSize: '',
    postcode: '',
    vehicleType: '',
    additionalInfo: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Booking request submitted! We will contact you shortly.');
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section className="relative -mt-20 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900">
            Book Right Now - It Takes 2 Minutes
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Fill in the details below
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                placeholder="Enter your full name" />
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                placeholder="Enter your phone number" />
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tyre Size *
                <a
                  href="#tyre-guide"
                  className="text-purple-600 text-xs ml-2 hover:underline">
                  
                  How to check?
                </a>
              </label>
              <input
                type="text"
                name="tyreSize"
                required
                value={formData.tyreSize}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                placeholder="e.g., 205/55 R16" />
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postcode *
              </label>
              <input
                type="text"
                name="postcode"
                required
                value={formData.postcode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                placeholder="Enter your postcode" />
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type *
              </label>
              <select
                name="vehicleType"
                required
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white">
                
                <option value="">Select vehicle type</option>
                <option value="car">Car</option>
                <option value="van">Van</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                placeholder="Any special requirements or notes..." />
              
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFC107] text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg shadow-lg">
              
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>);

}