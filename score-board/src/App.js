import React, { Component } from 'react';
import Player from './components/player';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App scoreboard">
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="players">
          <Player name="Player One" />
          <Player name="Player Two" />
        </div>
      </div>
    );
  }
}

export default App;
