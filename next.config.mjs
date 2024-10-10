/** @type {import('next').NextConfig} */
const patterns = [{ protocol: "http", hostname: "books.google.com" }];

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    remotePatterns: patterns,
  },
};

export default nextConfig;
