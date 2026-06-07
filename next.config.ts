import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.dummyjson.com',
      }
    ]
  }
};

export default nextConfig;
