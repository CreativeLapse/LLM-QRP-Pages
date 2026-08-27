import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LLM-QRP-Pages",
  assetPrefix: "/LLM-QRP-Pages/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
