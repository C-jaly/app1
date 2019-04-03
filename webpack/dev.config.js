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
  mode: 'development',
  output: { // 打包出来的文件名称和路径
    /**
     * 解析 __dirname,__filename,process.cwd(),./
     * __dirname: 当前文件的父目录绝对路径 /Users/cjl/studyspace/app1/webpack
     * __filename: 当前文件的带文件名绝对路径 /Users/cjl/studyspace/app1/webpack/dev.config.js
     * process.cwd(): 执行node命令的目录名绝对路径 Users/cjl/studyspace/app1
     * path.resolve(./dist) : 执行node命令的目录名 Users/cjl/studyspace/app1/dist
     */
    path: path.resolve('./dist'), // 或者 path.resolve(__dirname, '../dist') 打包出的文件所在目录
    publicPath: publicPath, // 打包出的文件可访问的公开目录
    filename: '[name]-[hash:6].js', // 打包出的文件名，根据入口文件的名称与文件hash出的索引组合
    // devServer: {
    //   contentBase: './dist'
    // }
  },
  module: { // 加载器加载规则
    rules: [
      {
        test: /\.jsx?$/, // js jsx后缀的文件用babel-loader加载器处理，将es6de语法转换为es5
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
        test: /\.css$/, // 使用css-loader style-loader处理.css文件，支持postcss,sass,less...
        use: [
          'style-loader',
          'css-loader?importLoaders=2',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/, // 使用css-loader style-loader处理.css文件，支持postcss,sass,less...
        use: [
          // 'babel-loader',
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/, // 图片当做URL被引入css或者页面的时候，需要用file-loader进行解析
        use: [ 'file-loader' ]
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
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.scss', '.less'],
    alias: {
      config: path.resolve('./config'),
      image: path.resolve('./src/image'),
      client: path.resolve('./src/client'),
      app: path.resolve('./src/common/app'),
      pages: path.resolve('./src/common/pages'),
      routes: path.resolve('./src/common/routes'),
      styles: path.resolve('./src/common/style'),
      controller: path.resolve('./src/server/controller')
    }
  }
}
