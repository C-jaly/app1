// import http, { Server } from 'http'
const http = require('http')
const express = require('express')


// 1.只用HTTP模块的写法
// http.createServer((req, res) => {
  //   res.write('Hello World')
  //   res.end()
  // }).listen(8000, '127.0.0.1')
  
  // 2.结合HTTP和express
  
const app = express()
app.get('/', function(req, res) {
  res.send('../../index.html')
})
app.get('/test', function(req, res) {
  res.send('testPage success!!!')
})
app.use('/about', function(req, res) {
  res.end('aboutPage success!!!')
})
http.createServer(app).listen(8000, '127.0.0.1')
console.log('Server running on 127.0.0.1:8000')

