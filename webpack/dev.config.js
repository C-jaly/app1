var path = require('path')
module.exports = {
  entry: './src/main.js', // 打包文件
  output: { // 打包出来的文件名称和路径
    /**
     * 解析 __dirname,__filename,process.cwd(),./
     * __dirname: 当前文件的父目录绝对路径 /Users/cjl/studyspace/app1/webpack
     * __filename: 当前文件的带文件名绝对路径 /Users/cjl/studyspace/app1/webpack/dev.config.js
     * process.cwd(): 执行node命令的目录名绝对路径 Users/cjl/studyspace/app1
     * path.resolve(./dist) : 执行node命令的目录名 Users/cjl/studyspace/app1/dist
     */
    path: path.resolve('./dist'), // 或者 path.reaolve(__dirname, '../dist')
    filename: 'bundle.js'
  },
  module: { // 加载器加载规则
    rules: [
      {
        test: /\.jsx?$/, // js jsx后缀的文件用babel-loader加载器处理
        loader: 'babel-loader',
        exclude: /node_modules/, // 忽略node_modules的文件
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      },
      // {
      //   test: /\.css$/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // }
    ]
  }
}
