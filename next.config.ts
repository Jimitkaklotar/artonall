/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // allow images from your local backend
      {
        protocol: "https",
        hostname: "artonall-backend.onrender.com",
        port: "",
        pathname: "/public/images/**",
      },
      // allow QR codes from qrserver.com
      {
        protocol: "https",
        hostname: "api.qrserver.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;