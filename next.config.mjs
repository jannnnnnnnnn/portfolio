/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";

// // Try to read "owner/repo" from the Actions env, else fallback
// const repo =
//   (process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.split("/")[1]) ||
//   "portfolio"; // <— replace with your repo if you prefer explicit

// const nextConfig = {
//   output: 'export',
//   basePath: isProd ? `/${repo}` : "",
//   assetPrefix: isProd ? `/${repo}/` : "",
//   trailingSlash: true, 
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   env: {
//     NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : ""
//   }
// }


//*********** */
const isProd = process.env.NODE_ENV === "production";

// Prefer explicit BASE_PATH if provided.
// Else, in CI derive from GITHUB_REPOSITORY ("owner/repo") → "/repo".
// Locally (no env), base path will be "".
const derivedRepo =
  (process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.split("/")[1]) || "";
const base =
  isProd
    ? (process.env.BASE_PATH ?? (derivedRepo ? `/${derivedRepo}` : ""))
    : "";

const nextConfig = {
  output: "export",
  basePath: base,
  assetPrefix: base ? `${base}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // Optional helper for raw <img>/CSS urls
  env: { NEXT_PUBLIC_BASE_PATH: base }
};

export default nextConfig
