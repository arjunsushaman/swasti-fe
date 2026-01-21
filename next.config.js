/** @type {import('next').NextConfig} */
const nextConfig = {
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
