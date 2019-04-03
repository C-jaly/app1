import React, { Component } from 'react'
import { browserHistory } from 'react-router'

/**
 * extends
 */
export default class RouteComp extends Component {
  constructor(props) {
    super(props)
    this.name = 'xxx'
    this.state = {

    }
  }
  static get123() {
    console.log(123)
  }
  gotoUrl = () => {
    console.log('gotoUrl this', this)
    const { url } = this.props
    browserHistory.push(url)
  }
  /**
   * !构造函数new时，内部的this指向的是实例
   * !箭头函数内部的this指向定义时的环境，这个定义在class构造函数执行时生效，
   * !class执行时指向的是实例，所以箭头函数this指向的也是实例
   */
  test = () => {
    console.log('rest', this, typeof RouteComp)
  }
  /**
   * !getName作为实例的属性来调用，所以this指向的是实例
   */
  getName() {
    return this.name
  }
  render() {
    const { children } = this.props
    console.log('render', this, this.test(), RouteComp.prototype, RouteComp.prototype.constructor)
    return (
      <div>
        <button onClick={this.gotoUrl}>{children}</button>
        <div>{this.getName()}</div>
      </div>
    )
  }
}
