/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.gifer.com", 'image.tmdb.org', 'www.themoviedb.org',],
},
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig
  