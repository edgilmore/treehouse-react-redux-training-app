import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
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
          <Counter score={this.props.score} />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};
