import React from 'react'
import { render } from 'react-dom'
import App from 'app/first.js'
import { Router } from 'react-router'
import '../../static/flexible/flexible'

render(App(), document.getElementById('content'))

if(module.hot) {
  module.hot.accept('app/first.js',() => {
    render(App(), document.getElementById('content'))
  })
}