/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "avatars.githubusercontent.com"
          },
          {
            protocol: 'https',
            hostname: 'hydeparkwinterwonderland.com'
          },
          {
            protocol: 'https',
            hostname: 'wembleypark.com'
          },
        ]
      }
}

module.exports = nextConfig
