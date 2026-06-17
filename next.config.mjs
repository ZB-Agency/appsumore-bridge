/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Crucial for Netlify Free Plan
  trailingSlash: true,   // Crucial for sub-folder routing (/advertorial/)
  images: {
    unoptimized: true,   // Required for static export
  },
};
export default nextConfig;