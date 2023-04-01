/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: This feature is required to use NextJS Image in SSG mode.
  // See https://nextjs.org/docs/messages/export-image-api for different workarounds.
  images: {
    unoptimized: true,
  },

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
