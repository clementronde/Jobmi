/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zupimages.net',
      },
    ],
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async redirects() {
    return [
      // www → non-www (permanent 301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.jobmi.fr' }],
        destination: 'https://jobmi.fr/:path*',
        permanent: true,
      },
      {
        source: '/orientation/test-orientation-jeunes',
        destination: '/test-orientation',
        permanent: true,
      },
      {
        source: '/blog/top-10-des-metiers-cool-pour-2024-que-tu-dois-connaitre',
        destination: '/blog/top-10-des-metiers-cool-pour-2026-que-tu-dois-connaitre',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
