import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tamediacdn.techaheadcorp.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default withNextVideo(nextConfig);