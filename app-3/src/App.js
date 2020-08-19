import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredString: '',
      friends: ['Carson', 'Cj', 'Harrison', 'Jared', 'Heather']
    }
  }

  handleChange(filter) {
    this.setState({
      filteredString: filter
    })
  }

  render() {
    let friendsToDisplay = this.state.friends.filter((element, index) => {
      return element.includes(this.state.filteredString)
    })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })

    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {friendsToDisplay}
      </div>
    )
  }

}


export default App;
