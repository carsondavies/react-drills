import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Image url={'https://th.bing.com/th/id/OIP.43Pu_Cn9ZtZnrNcmKfpfTwHaEK?w=331&h=186&c=7&o=5&dpr=1.1&pid=1.7'} />
      </div>
    )
  }

}

export default App;
