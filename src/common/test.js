/**
 * filename: test.js
 */
const path = require('path')

console.log('__dirname', __dirname)
console.log('__filename', __filename)
console.log('process.cwd', process.cwd())
console.log('resolve(\'./\')', path.resolve('./'))

setTimeout(() => console.log(1));
setImmediate(() => console.log(2));
// 下面两行，本轮循环执行
Promise.resolve().then(() => console.log(4));
process.nextTick(() => console.log(3));
