import React from 'React'
import { Route, IndexRedirect } from 'react-router'

const routes = (
  <Route path="/">
    <IndexRedirect to="/first/content2" />
    <Route path="first">
      <Route path="content1" />
      <Route path="content2" />
    </Route>
    <Route path="second" />
  </Route>
)
export default routes
