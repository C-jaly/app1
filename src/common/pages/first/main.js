import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import * as dom from 'react-dom'
import * as ExportEg from './exporteg'
import RouteComp from '../component/routeComp'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
  }
  componentWillMount() {
    // 实验postMessage方法
    window.addEventListener('message', (event) => {
      try {
        console.log(event)
      } catch(err) {
        alert(err)
      }
    }, false)
  }
  componentWillUnmount() {

  }

  h1Click(e) {
    console.log(e.target.getBoundingClientRect())
    console.log('this', this) // undefined
    ExportEg.test().then((data) => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
    console.log(document.getElementsByTagName('iframe')[0])

  }
  refc(com) {
    console.log('ref', this, com) // undefined, div
  }
  postMessage(e) {

  }
  render() {
    return (
      <div className="Main">
        <div>
          <h1 className="bd-1" onClick={this.h1Click}>content2,main.js</h1>
        </div>
        <RouteComp url='/container/content1'>About</RouteComp>
        <div className="div1" ref={this.refc}>1</div>
        <div className="div2">2</div>
        <iframe src="/shop.html"/>
      </div>
    )
  }
}
export default Main
