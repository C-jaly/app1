var path = require('path')
const webpack = require('webpack')
const config = require('../config')
const common = require('./common-config')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
const host = config.host
const port = Number(config.port) + 1
const publicPath = 'http://' + host + ':' + port + '/dist/'

module.exports = {
  devtool: 'inline-source-map',
  entry: common.entry, // 入口文件
  output: { // 打包出来的文件名称和路径
    /**
     * 解析 __dirname,__filename,process.cwd(),./
     * __dirname: 当前文件的父目录绝对路径 /Users/cjl/studyspace/app1/webpack
     * __filename: 当前文件的带文件名绝对路径 /Users/cjl/studyspace/app1/webpack/dev.config.js
     * process.cwd(): 执行node命令的目录名绝对路径 Users/cjl/studyspace/app1
     * path.resolve(./dist) : 执行node命令的目录名 Users/cjl/studyspace/app1/dist
     */
    path: path.resolve('./dist'), // 或者 path.resolve(__dirname, '../dist')
    publicPath: publicPath,
    filename: '[name]-[hash:6].js',
    devServer: {
      contentBase: './dist'
    }
  },
  module: { // 加载器加载规则
    rules: [
      {
        test: /\.jsx?$/, // js jsx后缀的文件用babel-loader加载器处理
        loader: 'babel-loader',
        exclude: /node_modules/, // 忽略node_modules的文件
        options: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader?limit=10240'
      },
      {
        test: /\.css$/,
        use: [
          // 'babel-loader',
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(), // 代码热更替插件
    webpackIsomorphicToolsPlugin.development(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
      IS_CLIENT: true,
      IS_SERVER: false,
      IS_DEVELOPMENT: true,
      ENABLE_DEVTOOLS: true
    }),
  ]
}
