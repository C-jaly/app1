// import http, { Server } from 'http'
import http from 'http'
import Express from 'express'
import path from 'path'
import ssr from './controller/ssr'

// 1.只用HTTP模块的写法
// http.createServer((req, res) => {
  //   res.write('Hello World')
  //   res.end()
  // }).listen(8000, '127.0.0.1')
  
  // 2.结合HTTP和express
  
const app = new Express()
app.use(Express.static(path.join(__dirname, '../common/static')))
http.createServer(app).listen(8000, '127.0.0.1', (err) => {
  if (err) {
    console.error(err.stack || err)
    process.exit(0)
  }
  console.info('===> open http://127.0.0.1:8000 in a browser to view app')
})
app.get('/', ssr)
app.get('/test', function(req, res) {
    res.send('testPage success!!!')
})
app.use('/about', function(req, res) {
  res.end('aboutPage success!!!')
})
