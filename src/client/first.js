// 第一个入口文件
import path from 'path'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../common/app/app'

const element = (
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
)
render(element, document.getElementById('content'))