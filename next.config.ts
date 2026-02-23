import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // res.cloudinary.com
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      }
    ],
    // dangerouslyAllowLocalIP: true,
  },
  // cloudinary
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
