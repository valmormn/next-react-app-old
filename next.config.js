const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     disable: !isProd
//   }
// })

//

const nextConfig = {
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.graphcms.com',
      'assets.vercel.com'
    ]
  },
  async redirects() {
    return [
      {
        source: '/shop/item',
        destination: '/shop',
        permanent: true
      },
      {
        source: '/blog/:slug',
        destination: '/blog',
        permanent: true
      }
    ]
  }
}

module.exports = withPlugins(
  [
    // add plugins here..
    [withBundleAnalyzer],
    [withMDX],
    [
      withPWA({
        pwa: {
          dest: 'public',
          disable: !isProd
        }
      })
    ]
  ],
  nextConfig
)
