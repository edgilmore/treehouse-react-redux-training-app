import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  render() {
    return (
      <div className="player">
        <div className="player-name">{this.props.name}</div>
        <div className="player-score">
          <Counter score={0} />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

export default Player;
