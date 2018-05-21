/**
 * filename: main.js
 */
import template from 'handlebars-loader!./numberlist.hbs'
  // 1
  // console.log('1,2,3,4,5')
  // module.exports = {name: 1}
  
  // 2
  import _ from 'lodash';
  const numbers = _.map([1,2,3,4,5,6], n => n*n)
  // document.getElementById("app-container").innerHTML = template({numbers});
  console.log(template({numbers}))


  // console.log('__dirname', __dirname)
  // console.log('__filename', __filename)
  // console.log('process.cwd', process.cwd())
  // console.log('resolve(\'./\')', path.resolve('./'))
  
  // import path from 'path'
  // import { map } from 'lodash';
  
  // const path = require('path')
  
  
// function component() {
//   var element = document.createElement('div');
//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }
// document.body.appendChild(component());

