import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score | 0,
    };
  }
  incrementScore() {
    this.setState({
      score: (this.score += 1),
    });
  }
  decrementScore() {
    this.setState({
      score: (this.score -= 1),
    });
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
}

export default Counter;