import React from 'react'
import { render } from 'react-dom'
import App from 'app/second.js'
import { Router } from 'react-router'
import '../../static/flexible/flexible'
import '../common/style/second.css'

render(App(), document.getElementById('content'))

if (module.hot) {
  module.hot.accept('app/second.js', () => {
    render(App(), document.getElementById('content'))
  })
}
