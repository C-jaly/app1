const Module = require("module")

/**
 * filename: test1.js
 */
// const main = require('./main.js')
const main = Module.prototype.require('./src/common/main.js')
console.log(main)
console.log(Module._cache)

module.exports = {
  name:1
}