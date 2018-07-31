// 第一个入口文件
import path from 'path'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import App from '../common/app/app'
import About from 'pages/about'

const element = (
  <Router basename="/">
    <div>
      <Route path="/about" component={About} />
      <Route path="/app" component={App} />
    </div>
  </Router>
)
const Sandwiches = () => <h2>Sandwiches</h2>
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>
const Tacos = () => <h3>Tocos</h3>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  { path: '/sandwiches',
    component: Sandwiches
  },
  { path: '/tacos',
    component: Tacos,
    routes: [
      { path: 'bus',
        component: Bus
      },
      { path: 'cart',
        component: Cart
      }
    ]
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => {
  const path = route.parentRoute ? `${route.parentRoute}/${route.path}` : route.path
  return <Route path={path} render={props => (
    // pass the sub-routes down to keep nesting
    props.match.path !== path ? route.routes && route.routes.map((routeChild, i) => (
      <RouteWithSubRoutes parentRoute={route.path} key={i} {...routeChild}/>
    )) : <route.component {...props} />
  )} />
}

const RouteConfigExample = () => (
  <Router>
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)
render(RouteConfigExample(), document.getElementById('content'))