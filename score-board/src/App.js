import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App scoreboard">
        <div className="header">
          <h1>Scoreboard</h1>
        </div>
        <div className="players">
          <div className="player">
            <div className="player-name">Player One</div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score">31</div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
          <div className="player">
            <div className="player-name">Player Two</div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score">31</div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
