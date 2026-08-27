import type { NextConfig } from "next";

const basePath = "/LLM-QRP-Pages";

const nextConfig: NextConfig = {
  output: "export",
  ...(process.env.NODE_ENV === "production"
    ? { basePath, assetPrefix: `${basePath}/` }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
