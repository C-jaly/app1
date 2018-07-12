// 第一个入口文件
import path from 'path'
import React from 'react'
import { render } from 'react-dom'

const element = (<div><h1>标题党</h1></div>)
render(element, document.getElementById('content'))