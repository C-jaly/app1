const path = require('path')
const config = require('../config')
const env = process.env.NODE_ENV;
const host = config.host
const port = Number(config.port) + 1
const hotReload = `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`
const webpackCommonConfig = {
  entry: {
    first: path.join(__dirname, '../src/client/first.js'),
    second: path.join(__dirname, '../src/client/second.js'),
    common: ['react', 'react-router', 'react-dom', 'mobx', 'mobx-react', 'lodash']
  }
}
if (env === 'development') {
  webpackCommonConfig.entry.vendor = [hotReload, 'react-hot-loader/patch']
}
module.exports = webpackCommonConfig