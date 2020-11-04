'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const Package = require('../package.json')
const argv = process.argv[4]
const config = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('examples'),
      '~': utils.resolve('src')
    }
  },
  externals: {
    vue: 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.BannerPlugin(`Flyer-UI v${Package.version}\n(c) 2017 - ${new Date().getFullYear()} Pengfei Zheng\nReleased under the MIT License.`),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}

if (argv === '--report') {
  config.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'server'
  }))
}

module.exports = config
