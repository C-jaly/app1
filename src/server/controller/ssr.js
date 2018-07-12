import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../helper/html'

module.exports = (req, res, next) => {
  if (global.IS_DEVELOPMENT) {
    global.webpackIsomorphicTools.refresh()
  }
  console.log('assets', global.webpackIsomorphicTools.assets())
  res.send(`<!doctype html>
    ${ReactDOM.renderToString(
      <Html
        source={['first']}
        assets={global.webpackIsomorphicTools.assets()}
      />)}`);
}