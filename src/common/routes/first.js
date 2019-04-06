import React from 'React'
import { Route, IndexRedirect } from 'react-router'
import { Main, About } from '../pages/first'
import { Start } from '../pages/component/start'

const routes = (
  <Route path="/" component={Start}>
    <Route path="first">
      <Route path="content1" component={About}></Route>
      <Route path="content2" component={Main}></Route>
    </Route>
  </Route>
)
export default routes
