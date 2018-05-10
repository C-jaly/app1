// import http, { Server } from 'http'
const http = require('http')
http.createServer((req, res) => {
  res.write('Hello World')
  res.end()
}).listen(8000, '127.0.0.1')
console.log('Server running on 127.0.0.1:8000')

