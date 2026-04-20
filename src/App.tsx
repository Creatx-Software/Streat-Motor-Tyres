import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandLogos } from './components/BrandLogos';
import { BookingForm } from './components/BookingForm';
import { TyreSizeGuide } from './components/TyreSizeGuide';
import { ServiceArea } from './components/ServiceArea';
import { ServiceFeatures } from './components/ServiceFeatures';
import { MobileService } from './components/MobileService';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <BookingForm />
      <TyreSizeGuide />
      <ServiceArea />
      <ServiceFeatures />
      <MobileService />
      <Testimonials />
      <Gallery />
      <FAQ />
      <MapSection />
      <Footer />
    </div>);

}