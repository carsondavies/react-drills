import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: ['Carson', 'Cj', 'Harrison', 'Jared', 'Heather']
    }
  }

  render() {
    let friendsToDisplay = this.state.friends.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return <div className='App'>{friendsToDisplay}</div>

  }
}

export default App;
