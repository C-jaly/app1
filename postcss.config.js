/* eslint-disable */
var webpack = require('webpack');
module.exports = {
  plugins: [
    require('postcss-import')({
      path: './src/common/style/*.css',
      addDependencyTo: webpack
    }),
    require('precss'),
    require('postcss-for'),
    require('postcss-cssnext')({ browsers: ['Android >= 4.0', 'ios >= 6', 'last 2 versions'] }),
  ],
};
/* eslint-enable */
