import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
/* eslint react/no-danger: 0 */
/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  // static propTypes = {
  //   assets: PropTypes.object,
  //   component: PropTypes.node,
  //   store: PropTypes.object,
  // }

  render() {
    const { assets, component, store, source, cnzzUrl } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    return (
      <html lang="zh">
        <head>
          {head.base.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          <title>点我达骑手</title>
          { /* <link rel="shortcut icon" href="/favicon.ico" /> */ }
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
          <link rel="dns-prefetch" href="//assets.dianwoda.cn" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {/* Object.keys(assets.styles).map((style, key) =>
            // eslint-disable-next-line react/no-array-index-key
            <link href={assets.styles[style]} key={key} media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />,
          ) */}

          {
            source.map((s, i) => (
              <link href={assets.styles[s]} media="screen, projection"
                rel="stylesheet" type="text/css" charSet="UTF-8" key={i}
              />
            ))
          }

          {/* (will be present only in development mode) */}
          {/* outputs a <style/> tag with all bootstrap styles + App.scss + it could be CurrentPage.scss. */}
          {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
          {/* ideally one could also include here the style for the current page (Home.scss, etc) */}
          {/* dangerouslySetInnerHTML={{ __html: require('../containers/App/App.scss')._style }} */}
          { Object.keys(assets.styles).length === 0 ?
            <style
              dangerouslySetInnerHTML={{ __html: '* {margin:0;padding:0;}' }}
            />
          : null }
          {cnzzUrl && <script charSet="UTF-8" src={cnzzUrl} />}
          <style dangerouslySetInnerHTML={{ __html: 'a[title="站长统计"]{display: none}' }} />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
          {process.env.NODE_ENV === 'development' ? <script src="/vendorDll/vendor.dll.js" /> : ''}
          <script src="//assets.dianwoda.cn/dianwoda-rider/static/raven.min.js" />
          {
            source.map((s, i) => (
              <script src={assets.javascript[s]} charSet="UTF-8" key={i} />
            ))
          }
        </body>
      </html>
    );
  }
}
