import React from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#0f0f23] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img
              src="/Streat_Tyre.png"
              alt="Streat Motor Tyres"
              className="h-12 w-auto" />
            
            <p className="text-gray-400 text-sm">
              Professional mobile tyre services across London and the M25
              region. Available 24/7 for emergencies.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors">
                
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors">
                
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors">
                
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Tyre Fitting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Tyre Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Tyre Replacement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-yellow-400 transition-colors">
                  
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-yellow-400 transition-colors">
                  
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <PhoneIcon size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="tel:07960902731"
                  className="hover:text-yellow-400 transition-colors">
                  
                  07960 902731
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@streatmotortyres.co.uk"
                  className="hover:text-yellow-400 transition-colors">
                  
                  info@streatmotortyres.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon size={18} className="mt-1 flex-shrink-0" />
                <span>M25 London Region</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Streat Motor Tyres. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}