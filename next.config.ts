import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.icons8.com',
      'placehold.co',
      'res.cloudinary.com',
      'cdn5.dcbstatic.com',
    ],
  },
}

const withNextIntl: (nextConfig?: NextConfig) => NextConfig =
  createNextIntlPlugin()

export default withNextIntl(nextConfig)
