/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.fallback = { process: require.resolve("process/browser") };
      return config;
    },
    env: {
      NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY, // 環境変数を明示的に設定
    },
  };
  
  module.exports = nextConfig;
  