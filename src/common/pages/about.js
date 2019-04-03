import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import RouteComp from './component/routeComp'
import '../style/first'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  divClick() {
    import('./component/log')
    .then((module) => {
      module.open()
    })
    .catch((err) => {
      console.log('err', err)
    })
  }
  render () {
    return (
      <div>
        <div onClick={this.divClick}>about tab</div>
        <RouteComp url='/container/content2'>Main</RouteComp>
      </div>
    )
  }
}
