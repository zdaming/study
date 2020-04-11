const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// 1) cleanWebpackPlugin
// 2) copyWebpackPlugin
// 3) bannerPlugin // 内置的
module.exports = {
  // 多入口
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'home.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([ // 拷贝插件
      { from: './doc', to: './doc' }
    ]),
    new webpack.BannerPlugin('make 2020 by zdm')
  ]
}
