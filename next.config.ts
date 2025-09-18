import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://placehold.co/400x200")],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
