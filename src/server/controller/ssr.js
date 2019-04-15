import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../helper/html'
import routes from '../routes'
import { match } from 'react-router'

module.exports = (req, res, next) => {
  console.log('开发环境：', global.IS_DEVELOPMENT)
  if (global.IS_DEVELOPMENT) {
    global.webpackIsomorphicTools.refresh()
  }
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log('assets', global.webpackIsomorphicTools.assets())
      let source = null
      if (/^\/first\//.test(req.path)) {
        source = ['vendor', 'first', 'update']
      } else if (/^\/second/.test(req.path)) {
        source = ['vendor', 'second', 'update']
      }
      res.send(`<!doctype html>
        ${ReactDOM.renderToString(
        <Html
          source={source}
          assets={global.webpackIsomorphicTools.assets()}
        />)}`);
    } else {
      next()
    }
  })
}
