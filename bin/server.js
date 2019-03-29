require('../server.babel')
const path = require('path')
const rootDir = path.resolve(__dirname, '..') // node执行的目录

/**
 * Define isomorphic constants
 */
global.IS_CLIENT = false;
global.IS_SERVER = true;
global.DISABLE_SSR = true;
console.log('+++++++++process.env.NODE_ENV', process.env.NODE_ENV)
global.IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
global.ROOTDIR = rootDir

const WebpackIsomorphicTools  = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
.server(rootDir, function() {
  require('../src/server')
})


