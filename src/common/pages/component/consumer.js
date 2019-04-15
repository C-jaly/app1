import React, { Component } from 'react'
import eventProxy from 'util/event.js'

export default class Provider extends Component {
  toggleItem = () => {
    eventProxy.trigger('toggleItemDetail', this.input.value)
  }
  render() {
    return (
      <div className="provider">
        <input placeholder="输入内容" defaultValue="默认值" ref={(com) => this.input = com} />
        <div className="btn" onClick={this.toggleItem}>切换item内容</div>
      </div>
    )
  }
}
