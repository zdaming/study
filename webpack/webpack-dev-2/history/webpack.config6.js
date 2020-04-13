const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
  resolve: { // 解析 第三方包 common
    modules: [path.resolve('node_modules')],
    extensions: ['.js', '.css', '.json']
    // mainFields: ['style', 'main']
    // mainFields: [] // 默认入口文件的名字 index.js
    // alias: { // 别名 vue vue.runtime
    //   bootstrap: 'bootstrap/dist/css/bootstrap.css'
    // }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
}
