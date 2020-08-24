import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: ['harry', 'cj', 'jared', 'heather', 'calvin', 'jasmine', 'spencer']
    }
  }

  render() {
    let friendsToDisplay = this.state.friends.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return <div className='App'>{friendsToDisplay}</div>
  }
}

export default App