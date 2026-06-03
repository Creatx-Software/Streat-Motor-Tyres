/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment for static export (cPanel without Node.js)
  // output: 'export',

  images: {
    // Uncomment when using static export
    // unoptimized: true,
  },

  // Don't fail production builds on ESLint warnings/errors (lint is run separately).
  // Keeps the deploy pipeline from breaking on stylistic rules like no-img-element.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optimization settings
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
