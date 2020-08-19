import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  displayText(value) {
    this.setState({
      message: value
    })
  }

  render() {
    return (
      <div className='App'>
        <input className='textInput' onChange={(e) => this.displayText(e.target.value)} />
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App
