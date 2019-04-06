import React from 'React'
import { Route, IndexRedirect } from 'react-router'
import { Second } from '../pages/second'
import { Start } from '../pages/component/start'

const routes = (
  <Route path="/" component={Start}>
    <Route path="second" component={Second}></Route>
  </Route>
)
export default routes
