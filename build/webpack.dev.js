let path = require('path')
// let includePath = [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'components')]
let excludePath = path.resolve(__dirname, 'node_modules')
let htmlwebpackplugin = require('html-webpack-plugin')
module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../examples/main.js'),
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, '../examples')
    },
    module: {
        rules: [
            {
                test: [/\.js$|\.vue$/],
                exclude: excludePath,
                loaders: [
                    'eslint-loader'
                ],
                enforce: 'pre'
            },
            {
                test: [/\.js$/],
                exclude: excludePath,
                use: ['babel-loader']
            },
            {
                test: [/\.vue$/],
                exclude: excludePath,
                use: ['vue-loader']
            },
            {
                test: [/\.scss$/],
                exclude: excludePath,
                use: ['sass-loader', 'css-loader', 'style-loader']
            },
            {
                test:/\.(eot|svg|ttf|woff)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            filename: path.resolve(__dirname, '../examples/index.html'),
            template: path.resolve(__dirname, '../examples/index.html'),
            inject: true
        })
    ]
}