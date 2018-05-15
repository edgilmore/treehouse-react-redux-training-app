import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.props.onChange(this.props.playerId, -1)}>
          -
        </button>
        <div className="counter-score">{this.props.score}</div>
        <button className="counter-action increment" onClick={() => this.props.onChange(this.props.playerId, 1)}>
          +
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  playerId: PropTypes.number.isRequired,
};
