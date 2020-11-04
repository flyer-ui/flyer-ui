'use strict'
const components = require('../compoents.json')
const path = require('path')
const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge(webpackBase, {
  mode: 'production',
  entry: components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  }
})
