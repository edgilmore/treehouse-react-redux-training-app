import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    playerId: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={() => this.props.updatePlayerScore(this.props.playerId, -1)}
        >
          -
        </button>
        <div className="counter-score">{this.props.score}</div>
        <button
          className="counter-action increment"
          onClick={() => this.props.updatePlayerScore(this.props.playerId, 1)}
        >
          +
        </button>
      </div>
    );
  }
}
