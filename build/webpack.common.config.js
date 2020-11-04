'use strict'
const path = require('path')
const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge(webpackBase, {
  mode: 'production',
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist',
    filename: 'flyer-ui.common.js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  }
})
