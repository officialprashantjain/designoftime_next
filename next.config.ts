import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/assets/:path*",
        destination: "/assets/:path*",
      }
    ];
  }
};

export default nextConfig;
