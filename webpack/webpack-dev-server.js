const Express = require('express')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./dev.config')

const host = config.host
const port = Number(config.port) + 1
const compiler = webpack(webpackConfig)
const serverOptions = {
  contentBase: `http://${host}:${port}`,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  poll: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*',
    
  },
  stats: { colors: true, chunks: false },
}

const app = new Express()
app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))
app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }
})
