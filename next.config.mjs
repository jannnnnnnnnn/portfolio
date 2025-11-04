/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// Try to read "owner/repo" from the Actions env, else fallback
const repo =
  (process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.split("/")[1]) ||
  "portfolio"; // <— replace with your repo if you prefer explicit

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
