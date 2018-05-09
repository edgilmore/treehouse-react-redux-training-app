import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
    };
  }
  incrementScore() {
    this.setState({
      score: (this.state.score += 1),
    });
  }
  decrementScore() {
    this.setState({
      score: this.state.score !== 0 ? (this.state.score -= 1) : 0,
    });
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}>
          {' '}
          -{' '}
        </button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
};
