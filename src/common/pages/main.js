import React, { Component } from 'react'
import * as dom from 'react-dom'
import * as ExportEg from './exporteg'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
    console.log(ExportEg)
    console.log('dom', dom)
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div>
        <h1>content2,main.js</h1>
      </div>
    )
  }
}
export default Main
