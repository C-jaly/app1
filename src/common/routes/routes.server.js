import React from 'React'
import { Route, IndexRedirect } from 'react-router'
import { Main, About } from 'pages'

const routes = (
  <Route path="/">
    <IndexRedirect path="container/content2" />
    <Route path="container">
      <Route path="content1" Component={About}></Route>
      <Route path="content2" Component={Main}></Route>
    </Route>
  </Route>
)
export default routes
