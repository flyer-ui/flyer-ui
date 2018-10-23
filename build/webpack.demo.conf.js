let path = require('path')
let baseWebpackConfig = require('./webpack.base.conf')
let merge = require('webpack-merge')
let htmlwebpackplugin = require('html-webpack-plugin')
module.exports = merge(baseWebpackConfig,{
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../examples/main.js'),
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, '../examples')
    },
    plugins: [
        new htmlwebpackplugin({
            filename: path.resolve(__dirname, '../examples/index.html'),
            template: path.resolve(__dirname, '../examples/index.html'),
            inject: true
        })
    ]
})