/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    // unoptimised: true
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com']
  }
};

module.exports = nextConfig;
