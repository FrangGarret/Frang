'use strict'
var webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
const vuxLoader = require('vux-loader')
const webpackConfig = {
	entry: {
//		app: './src/main.js'
			app: ["babel-polyfill","./src/main.js"] 
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"windows.jQuery": "jquery"
		})
	],
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: './'
		//  publicPath: process.env.NODE_ENV === 'production'  
		//    ? config.build.assetsPublicPath  
		//    : config.dev.assetsPublicPath  
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.less', '.sass'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
		}
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[ext]')
				}
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
//					name: utils.assetsPath('media/[name].[hash:7].[ext]')
					name: utils.assetsPath('media/[name].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp3)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					name: utils.assetsPath('assets/[name].[ext]')
				}
			},
			{
				test: /\.jade$/,
				loader: "jade"
			},
			{
				test: /\.pug$/,
				loader: 'pug'
			}
		]
	}
}
module.exports = vuxLoader.merge(webpackConfig, {
	plugins: ['vux-ui']
})