import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/ptf',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
