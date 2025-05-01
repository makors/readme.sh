import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '4e4qswas41.ufs.sh',
      },
    ],
  },
};

const withMDX = createMDX({});
 
export default withMDX(nextConfig);