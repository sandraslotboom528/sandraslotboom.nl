import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Verborgen e-bookpagina en PDF niet laten indexeren door zoekmachines
  async headers() {
    return [
      { source: '/e-book-pijn-6de23f6517', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/downloads-6de23f6517/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ];
  },
};

export default nextConfig;
