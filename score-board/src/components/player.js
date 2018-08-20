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
    removePlayer: PropTypes.func.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired,
    playerId: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={() => this.props.removePlayer(this.props.playerId)}>
            ✖
          </a>
          <a className="player-name-text" onClick={() => this.props.selectPlayer(this.props.index)}>{this.props.name}</a>
        </div>
        <div className="player-score">
          <Counter
            score={this.props.score}
            updatePlayerScore={this.props.updatePlayerScore}
            playerId={this.props.playerId}
          />
        </div>
      </div>
    );
  }
}
