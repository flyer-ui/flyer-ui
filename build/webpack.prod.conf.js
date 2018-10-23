let path = require('path')
let merge = require('webpack-merge')
let baseWebpackConfig = require('./webpack.base.conf')
module.exports = merge(baseWebpackConfig,{
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'flyerui.js',
        path: path.resolve(__dirname, '../dist')
    }
})