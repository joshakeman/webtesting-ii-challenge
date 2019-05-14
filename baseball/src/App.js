import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard'
import Display from './components/Display'



class App extends React.Component {
  
  state = {
    strikes: 0,
    balls: 0,
}

  umpCall = (call) => {
    if (call === 'strike') {
        console.log('streeeeeeeeeeike!')
    } else if (call === 'ball') {
        console.log('ball')
    } else if (call === 'foul') {
        console.log('foul')
    } else {
        console.log('hit')
    }
}

  render() {
    return (
      <div className="App">
        <Dashboard 
        umpCall={this.umpCall}/>
        <Display />
      </div>
    );

  }

}

export default App;
