import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  incrementScore() {
    this.setState({
      score: this.score += 1,
    });
  }
  decrementScore() {
    this.setState({
      score: this.score -= 1,
    });
  }
  render() {
    return (
      <div className="player">
        <div className="player-name">{this.props.name}</div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{this.state.score}</div>
            <button className="counter-action increment"> + </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
