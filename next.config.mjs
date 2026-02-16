/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath in production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/faceit-demo-auto-manager-landing-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/faceit-demo-auto-manager-landing-site' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
