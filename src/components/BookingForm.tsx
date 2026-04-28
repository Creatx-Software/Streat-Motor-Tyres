"use client";

import React, { useState } from 'react';
export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    tyreSize: '',
    whatIsWrong: '',
    vehicleDetails: '',
    phoneNumber: '',
    email: '',
    urgencyLevel: ''
  });
  const [isLocating, setIsLocating] = useState(false);

  const getFormattedLocation = (data: any) => {
    const parts = [
      data?.locality,
      data?.city,
      data?.principalSubdivision,
      data?.postcode
    ].filter(Boolean);

    if (parts.length > 0) return parts.join(', ');
    return `${data?.latitude}, ${data?.longitude}`;
  };

  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`
          );

          if (!response.ok) {
            throw new Error('Could not fetch your location details.');
          }

          const locationData = await response.json();
          const formattedLocation = getFormattedLocation(locationData);

          setFormData((prev) => ({
            ...prev,
            location: formattedLocation
          }));
        } catch (error) {
          console.error(error);
          alert('Unable to determine your location details. Please enter it manually.');
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error(error);
        setIsLocating(false);
        alert('Location access was denied or unavailable. Please enter your location manually.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

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
    <section className="relative -mt-px pb-48 px-4 bg-[url('/assets/FormBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full md:w-[48rem]">
        <div className="w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 translate-y-16">
          <h2 className="text-xl sm:text-2xl font-inter font-semibold text-center mb-2 text-[#8B16CC]">
            ⚡ Get Help Now - It Takes 2 Minutes
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 mt-10">
            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-md font-inter font-regular text-[#A2A2A2]"
                placeholder="Enter your full name" />
              
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                Your Current Location *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-md font-inter font-regular text-[#A2A2A2]"
                  placeholder="Enter your current location" />
                <button
                  type="button"
                  onClick={handleLocate}
                  disabled={isLocating}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-inter font-semibold text-[#8B16CC] disabled:text-gray-400 disabled:no-underline">
                  {isLocating ? 'Locating...' : 'Locate Me'}
                </button>
              </div>
              
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                Tyre Size (If known) *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="tyreSize"
                  required
                  value={formData.tyreSize}
                  onChange={handleChange}
                  className="w-full px-4 pr-36 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-md font-inter font-regular text-[#A2A2A2]"
                  placeholder="e.g., 205/55 R16" />
                <a
                  href="#tyre-guide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-inter font-semibold text-[#8B16CC]">
                  Tyre Size Guide
                </a>
              </div>
              
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                What’s wrong *
              </label>
              <div className="relative">
                <select
                  name="whatIsWrong"
                  required
                  value={formData.whatIsWrong}
                  onChange={handleChange}
                  className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white appearance-none">
                  <option value="" disabled>
                    Select issue
                  </option>
                  <option value="tyre-replacement">Tyre Replacement</option>
                  <option value="puncture-repair">Puncture Repair</option>
                  <option value="wheel-balancing">Wheel Balancing</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd" />
                </svg>
              </div>
              
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                Vehicle details *
              </label>
              <input
                type="text"
                name="vehicleDetails"
                required
                value={formData.vehicleDetails}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-md font-inter font-regular text-[#A2A2A2]"
                placeholder="e.g., BMW 3 Series, 2019" />
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                Your Phone number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-md font-inter font-regular text-[#A2A2A2]"
                placeholder="Enter your phone number" />
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-md font-inter font-regular text-[#A2A2A2]"
                placeholder="Enter your email address" />
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-[#1C1C1E] mb-3">
                Urgency Level *
              </label>
              <div className="relative">
                <select
                  name="urgencyLevel"
                  required
                  value={formData.urgencyLevel}
                  onChange={handleChange}
                  className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white appearance-none">
                  <option value="" disabled>
                    Select urgency level
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFD10F] text-[#1C1C1E] font-inter font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg shadow-lg translate-y-3">
              
              Get Help Now
            </button>
          </form>
        </div>
      </div>
    </section>);

}