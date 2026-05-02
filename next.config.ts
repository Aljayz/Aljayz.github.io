import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",               // <-- generate static files for GitHub Pages
  images: {
    unoptimized: true,            // <-- disables server-side image optimisation
    // remotePatterns can stay, but they're ignored when unoptimized
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};

export default nextConfig;