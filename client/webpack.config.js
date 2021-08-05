/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
require('dotenv').config()

var config = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  devServer: {
    port: process.env.DEV_PORT,
    watchContentBase: true,
    hot: true,
    http2: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.mjs', '.json', '.wasm']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, './src/assets/favicon.png'),
      mode: 'light',
      devMode: 'webapp',
      favicons: {
        appName: 'battleship-algorand',
        appDescription: 'A Battleship game built on the Algorand Network using Reach.',
        developerName: 'Victor Shahbazian',
        icons : {
          coast: false,
          yandex: false
        }
      }
    }),
    // new WebpackManifestPlugin({ fileName: path.resolve(__dirname, './src/assets/manifest.json')})
  ],
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
  }

  if (argv.mode === 'production') {
    //
  }

  return config
}