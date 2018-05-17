import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    playerId: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={this.props.onRemove}>
            ✖
          </a>
          {this.props.name}
        </div>
        <div className="player-score">
          <Counter score={this.props.score} onChange={this.props.onScoreChange} playerId={this.props.playerId} />
        </div>
      </div>
    );
  }
}
