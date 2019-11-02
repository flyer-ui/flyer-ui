'use struct'
const utils = require('./utils')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: '../src/main.js'
  },
  output: {
    path: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('examples'),
      '~': utils.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => {
          return /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.scss$/,
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  }
}
