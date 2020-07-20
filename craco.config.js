const RouteManifest = require('webpack-route-manifest')

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new RouteManifest({
          routes(str) {
            let out = str.replace('./src/pages', '').toLowerCase()
            if (out === '/home') return '/'
            return out
          },
          filename: 'rmanifest.json',
        })
      )
      return webpackConfig
    },
  },
}
