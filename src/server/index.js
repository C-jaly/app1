// import http, { Server } from 'http'
import http from 'http'
import Express from 'express'
import path from 'path'
import ssr from './controller/ssr'
import bodyParser from 'body-parser'

// 1.只用HTTP模块的写法
// http.createServer((req, res) => {
  //   res.write('Hello World')
  //   res.end()
  // }).listen(8000, '127.0.0.1')
  
  // 2.结合HTTP和express
  
const app = new Express()
app.use(Express.static(path.join(__dirname, '../../static')))
console.log(path.join(__dirname, '../../static'))
app.use(bodyParser.urlencoded({ extended: true, limit: '4mb' }));
app.use(bodyParser.json())
http.createServer(app).listen(8000, '127.0.0.1', (err) => {
  if (err) {
    console.error(err.stack || err)
    process.exit(0)
  }
  console.info('===> open http://127.0.0.1:8000 in a browser to view app')
})
app.get('/*', ssr)
app.post('/test', function(req, res) {
  try {
    console.log(req.body)
    res.setHeader('Cache-Control', "max-age=60")
    res.setHeader('Set-Cookie', "name=1")
    res.send(req.body ? JSON.stringify(req.body) : 'Hello')
  } catch(err) {
    console.log('___________________________', err)
  }
})

