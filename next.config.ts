import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" to allow dynamic features
  images: {
    unoptimized: true, // if deploying to static hosting
  },
};

export default nextConfig;
