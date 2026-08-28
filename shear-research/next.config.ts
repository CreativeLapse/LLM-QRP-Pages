import type { NextConfig } from "next";

const basePath = "/SHEAR-Research";

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
