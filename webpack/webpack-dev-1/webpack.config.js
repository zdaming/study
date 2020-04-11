// webpack 是node写出来的 node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let Webpack = require('webpack');

module.exports = {
  optimization: { // 优化项
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true
      // }),
      // new OptimizeCss()
    ]
  },
  devServer: { // 开发服务器的配置
    port: 3000,
    progress: true,
    contentBase: './build',
    compress: true
  },
  mode: 'development', // 模式 默认两种 production development
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'build'), // 路径必须是一个绝对路径
    publicPath: 'http://www.zhufengpeixun.cn/'
  },
  plugins: [ // 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new Webpack.ProvidePlugin({ // 在每个模块中都注入$
      $: 'jquery'
    })
  ],
  externals: {
    jquery: '$'
  },
  module: { // 模块
    rules: [ // 规则 css-loader 解析 @import这种语法
      // style-loader 他是把css 插入到head的标签中
      // loader的特点 希望单一
      // loader的用法 字符串只用一个loader
      // 多个loader需要 []
      // loader的顺序 默认是从右向左执行 从下到上执行
      // loader还可以写成 对象方式
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       enforce: 'pre' // previous post
      //     }
      //   }
      // },
      // {
      //   test: require.resolve('jquery'),
      //   use: 'expose-loader?$'
      // },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.(png|jpg|gif)/,
        // 做一个限制当我们的图片小于多少k的时候用base64来转化
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1,
            outputPath: 'img/'
          }
        }
      },
      // {
      //   test: /\.(png|jpg|gif)/,
      //   use: 'file-loader'
      // },
      {
        test: /\.js$/, // normal 普通的loader
        use: {
          loader: 'babel-loader',
          options: { // 用babel-loader 需要把es6-es5
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose" : true }],
              ["@babel/plugin-transform-runtime"]
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  }
}
