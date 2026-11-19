import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Oude adres van de acupressuuropleiding blijft werken (links in mails, social media, Google)
  async redirects() {
    return [
      { source: '/training-5-elementen-acupressuur', destination: '/opleiding-5-elementen-acupressuur', permanent: true },
    ];
  },
  // Verborgen e-bookpagina en PDF niet laten indexeren door zoekmachines
  async headers() {
    return [
      { source: '/e-book-pijn-6de23f6517', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/downloads-6de23f6517/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ];
  },
};

export default nextConfig;
