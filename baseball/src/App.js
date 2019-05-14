import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard'
import Display from './components/Display'



class App extends React.Component {
  
constructor() {
  super()
  
  this.state = {
    strikes: 0,
    balls: 0,
}

}
  callBall = () => {
    if ( this.state.balls === 3 ) {
      this.setState({
        balls: 0
      })
    } else {
      this.setState({
        balls : this.state.balls + 1
      })
    } 
  }

  umpCall = (call) => {
    if (call === 'strike') {
        if ( this.state.strikes === 2 ) {
          this.setState({
            strikes : 0
          })
        } else {
          this.setState({
            strikes : this.state.strikes + 1
          })
        }
       
    } else if (call === 'ball') {
      this.callBall()
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
        <Display 
        count={this.state}/>
      </div>
    );

  }

}

export default App;
