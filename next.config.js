/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.strapi.io',
        pathname: '/uploads/**',
      },
      // Add your production Strapi domain here when available
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: 'your-strapi-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  // Suppress build warnings about missing environment variables during build
  // This allows the build to complete with fallback data when Strapi is not available
  typescript: {
    // Dangerously allow production builds to complete even with type errors
    // Remove this once all type issues are resolved
    ignoreBuildErrors: false,
  },
  eslint: {
    // Don't fail the build on ESLint errors during production builds
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
