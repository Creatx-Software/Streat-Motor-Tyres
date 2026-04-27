import React from 'react';
import {
  FacebookIcon,
  XIcon,
  Music2Icon,
  InstagramIcon,
} from
'lucide-react';
export function Footer() {
  const quickLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'SIZE GUIDE', href: '#tyre-guide' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#', icon: FacebookIcon },
    { label: 'TikTok', href: '#', icon: Music2Icon },
    { label: 'X', href: '#', icon: XIcon },
    { label: 'Instagram', href: '#', icon: InstagramIcon }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="space-y-6">
              <img
                src="/Logo.png"
                alt="Streat Motor Tyres"
                className="h-16 w-auto" />
            </div>

            <div className="space-y-3">
              <nav className="flex flex-wrap gap-x-8 gap-y-3 text-md font-inter font-bold tracking-wide">
                {quickLinks.map((link) =>
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/90 transition-colors hover:text-[#FFD10F]">

                  {link.label}
                </a>
                )}
              </nav>
              <p className="text-md font-inter text-[#FEC42D]">
                tyres@streatmotors.co.uk | 07960 902731
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7 lg:items-end">
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center text-[#DA96FF] transition-colors"
                  >
                    <Icon size={20} color="#DA96FF" className="stroke-[#DA96FF]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 w-full border-t border-black/10 bg-white py-6 text-center text-sm text-[#AEAEAE] sm:text-md font-inter font-semibold">
        <p>
          © {new Date().getFullYear()} Developed by <span className="text-[#2D2D2D]">Creatx Software Ltd</span>. All rights reserved.
        </p>
      </div>
    </footer>);

}