const Module = require("module")

/**
 * filename: test1.js
 */
// const main = require('./main.js')
const main = Module.prototype.require('./main.js')
console.log(main)
console.log(Module._cache)