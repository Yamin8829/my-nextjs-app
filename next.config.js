/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
  },
  api: {
    domains: ["https://myschoolsite.vercel.app"],
  },
};

module.exports = nextConfig;
