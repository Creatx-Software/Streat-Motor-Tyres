import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://streatmotortyres.co.uk'),
  title: {
    default: 'Streat Motor Tyres - Mobile Tyre Fitting Service in Redhill, Surrey',
    template: '%s | Streat Motor Tyres'
  },
  description: 'Professional mobile tyre fitting service in Redhill, Surrey. We come to you for tyre changes, repairs, and replacements. Fast, reliable, and affordable. Call 07960 902731 for same-day service.',
  keywords: [
    'mobile tyre fitting',
    'tyre service Redhill',
    'tyre fitting Surrey',
    'mobile tyre replacement',
    'tyre repair Redhill',
    'emergency tyre service',
    'car tyres Surrey',
    'van tyres Redhill',
    'tyre change service',
    'mobile mechanic tyres',
    'Streat Motor Tyres'
  ],
  authors: [{ name: 'Streat Motor Tyres' }],
  creator: 'Streat Motor Tyres',
  publisher: 'Streat Motor Tyres',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/Logo-23851.svg',
    apple: '/Logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://streatmotortyres.co.uk',
    siteName: 'Streat Motor Tyres',
    title: 'Streat Motor Tyres - Mobile Tyre Fitting Service in Redhill, Surrey',
    description: 'Professional mobile tyre fitting service in Redhill, Surrey. We come to you for tyre changes, repairs, and replacements. Fast, reliable, and affordable.',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Streat Motor Tyres - Mobile Tyre Fitting Service',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SMotorTyres',
    creator: '@SMotorTyres',
    title: 'Streat Motor Tyres - Mobile Tyre Fitting Service in Redhill, Surrey',
    description: 'Professional mobile tyre fitting service in Redhill, Surrey. We come to you for tyre changes, repairs, and replacements.',
    images: ['/Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Add your Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': 'https://streatmotortyres.co.uk/#organization',
    name: 'Streat Motor Tyres',
    image: 'https://streatmotortyres.co.uk/Logo.png',
    logo: 'https://streatmotortyres.co.uk/Logo.png',
    url: 'https://streatmotortyres.co.uk',
    telephone: '+447960902731',
    email: 'tyres@streatmotors.co.uk',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2a Linkfield Corner',
      addressLocality: 'Redhill',
      addressRegion: 'Surrey',
      postalCode: 'RH1 1BB',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2362,
      longitude: -0.1665
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/61579475364611/',
      'https://www.tiktok.com/@streatmotortyres',
      'https://x.com/SMotorTyres',
      'https://www.instagram.com/streat_motor_tyres'
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.2362,
        longitude: -0.1665
      },
      geoRadius: '30000'
    },
    serviceType: [
      'Mobile Tyre Fitting',
      'Tyre Replacement',
      'Tyre Repair',
      'Emergency Tyre Service',
      'Puncture Repair'
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JHKSGZG');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JHKSGZG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}