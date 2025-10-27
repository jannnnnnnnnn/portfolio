/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // </CHANGE>
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
