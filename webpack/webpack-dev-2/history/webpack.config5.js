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
  devServer: {
    // 1)
    // proxy: {
    //   '/api': { // 重写的方式 把请求代理到express服务器上
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   } // 配置了一个代理
    // }
    // 2) 模拟数据
    // before (app) { // 提供的方法
    //   app.get('/user', (req, res) => {
    //     res.json({
    //       name: 'zdm2'
    //     })
    //   })
    // }
    // 3) 有服务端 不用代理来处理 能不能在服务器中启动webpack 端口用服务器端口
    
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
