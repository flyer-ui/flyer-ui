let path = require('path')
// let includePath = [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'components')]
let excludePath = path.resolve(__dirname, 'node_modules')
module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		filename: 'flyerui.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: [/.js$/],
				exclude: excludePath,
				use: ['babel-loader']
			},
			{
				test: [/.vue$/],
				exclude: excludePath,
				use: ['vue-loader']
			},
			{
				test: [/.scss$/],
				exclude: excludePath,
				use: ['scss-loader', 'css-loader', 'style-loader']
			}
		]
	}
}