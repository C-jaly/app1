import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import RouteComp from '../component/routeComp'
import '../../style/first.css'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  shouldComponentUpdate(prev) {

  }
  async componentDidMount() {
    try {
      var data = await fetch('/test', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cache-Control': "max-age=600"
        },
        method: 'POST',
        body: {
          name: 1
        }

      })

    } catch (err) {
      console.log(err)
    }
  }
  divClick = () => {
    import('../component/log')
      .then((module) => {
        module.open()
      })
      .catch((err) => {
        console.log('err', err)
      })
    this.setState({
      inputValue: 100
    })
    this.theInput.focus()
  }
  change = (e) => {
    // 输入带有请求的html形成xss攻击
    this.div.innerHTML = e.target.value

  }
  render() {
    return (
      <div>
        <div onClick={this.divClick}>about tab</div>
        <RouteComp url='/container/content2' ref={com => this.routeComp = com}>Main</RouteComp>
        <input ref={(com) => this.theInput = com} onChange={this.change} type="text" />
        <br />
        <input type='text' ref={(com) => this.theInput = com} value={this.state.inputValue} />
        <div ref={(com) => this.div = com} style={{backgroundImage: 'url(../../../../image/img.png)'}}>div</div>
      </div>
    )
  }
}
