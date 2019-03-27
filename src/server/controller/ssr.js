import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../helper/html'
// import routes from '../../common/routes/routes.server.js'

module.exports = (req, res, next) => {
  console.log('开发环境：', global.IS_DEVELOPMENT)
  if (global.IS_DEVELOPMENT) {
    global.webpackIsomorphicTools.refresh()
  }
  console.log('assets', global.webpackIsomorphicTools.assets())
  res.send(`<!doctype html>
    ${ReactDOM.renderToString(
      <Html
        source={['vendor', 'first']}
        // component={}
        assets={global.webpackIsomorphicTools.assets()}
      />)}`);
}