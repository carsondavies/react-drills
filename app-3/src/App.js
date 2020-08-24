import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: '',
      friends: ['harry', 'cj', 'jared', 'heather', 'calvin', 'jasmine', 'spencer']
    }
  }

  handleChange(val) {
    this.setState({
      filterString: filter
    })
  }

  render() {
    let friendsToDisplay = this.state.friends
      .filter((element, index) => {
        return element.includes(this.state.filterString)
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })

    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
      </div>
    )
  }
}

export default App