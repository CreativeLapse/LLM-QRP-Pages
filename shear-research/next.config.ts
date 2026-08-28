import type { NextConfig } from "next";
import { basePathForOutput } from "./app/lib/basepath";

const basePath = basePathForOutput;

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
