import path from 'path';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false,
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.9.21', '192.168.7.21'],
  ...(isProd && {
    assetPrefix: '',
  }),
};

export default nextConfig;
