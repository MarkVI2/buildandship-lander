/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['emanuelepapale.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emanuelepapale.com',
        pathname: '/assets/**',
      },
    ],
  },
  webpack: (config) => {
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    })

    // Handle GSAP plugins
    config.module.rules.push({
      test: /\.(gsap-plugins)$/,
      use: ['script-loader'],
    })

    return config
  },
  // Enable experimental features if needed
  experimental: {
    serverActions: true,
    optimizeCss: true,
  },
}

module.exports = nextConfig 