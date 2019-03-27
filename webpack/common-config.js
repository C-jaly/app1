const path = require('path')
module.exports = {
  entry: {
    vendor: ['react-hot-loader/patch'],
    first: path.join(__dirname, '../src/client/first.js'),
  }
}