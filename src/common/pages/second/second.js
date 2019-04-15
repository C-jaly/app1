import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import Item from '../component/item'
import Provider from '../component/consumer'

export default class Second extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="Second-flexible">
        <header className="header">
          <div className="rest-value">余额</div>
          <div className="values"><span>￥</span><span>124</span></div>
          <div className="btn">充值</div>
          <div className="desc">充值金额将用于派件账单自动支付，<span className="main-color">了解详情</span></div>
        </header>
        <section>
          <Item />
          <Provider />
        </section>
      </div>
    )
  }
}
