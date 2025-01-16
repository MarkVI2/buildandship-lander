import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "buildandship.org"],
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}