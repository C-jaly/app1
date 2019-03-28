import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import routes from 'routes/routes.server.js'
export default function app() {
  console.log(routes)
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  )

}