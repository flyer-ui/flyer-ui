let path = require('path')
let excludePath = path.resolve(__dirname, 'node_modules')
module.exports = {
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
}