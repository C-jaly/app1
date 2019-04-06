// 水平居中
// 1.作为行内元素，text-align:center
// 2.有固定宽度或者display:table随内容走的宽度,margin:0 auto
// 3.绝对定位居中，left:50%,translateX(-50%)
// 4.flex

// 垂直居中
// 1.单行内容line-height
// 2.父元素table-cell ,vertical-align
// 3.绝对定位
// 4.flex
import React, { Component } from 'react'

export default (title) => (wrappedComp) => class A extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}