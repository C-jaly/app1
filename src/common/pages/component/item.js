import React, { Component } from 'react'
import iconDetail from 'image/icon-detail.png'
import eventProxy from 'util/event.js'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '交易明细'
    }
  }
  componentDidMount() {
    eventProxy.addListener('toggleItemDetail', (msg) => {
      this.setState({
        name: msg
      })
    })
  }
  componentWillUnmount() {
    eventProxy.removeListener('toggleItemDetail')
  }
  render() {
    return (
      <div>
        <div className="flex-box">
          <img src={iconDetail} />
          <div className="flex-desc">{this.state.name}</div>
        </div>
      </div>
    )
  }
}
