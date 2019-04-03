import React from 'React'
import { Route, IndexRedirect } from 'react-router'
import { Start, Main, About } from 'pages'

const routes = (
  <Route path="/" component={Start}>
    <IndexRedirect to="/container/content2" />
    <Route path="container">
      <Route path="content1" component={About}></Route>
      <Route path="content2" component={Main}></Route>
    </Route>
  </Route>
)
export default routes
