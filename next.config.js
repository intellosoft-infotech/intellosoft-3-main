/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'intellosoft.io',
          },
        ],
        destination: 'https://www.intellosoft.io/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
