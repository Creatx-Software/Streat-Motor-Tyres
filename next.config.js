/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment for static export (cPanel without Node.js)
  // output: 'export',

  images: {
    // Uncomment when using static export
    // unoptimized: true,
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

module.exports = nextConfig;
