const config = require('./webpack.config.js')

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    config.devServer = {
      historyApiFallback: true,
      watchContentBase: true,
      hot: true,
      https: true
    }
  }

  if (argv.mode === 'production') {
    config.optimization = {
      minimize: true
    }
  }

  return config
}
