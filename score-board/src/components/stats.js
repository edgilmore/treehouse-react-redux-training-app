import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Stats extends Component {
  render() {
    const totalPoints = this.props.players.reduce((total, player) => total + player.score, 0);
    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{this.props.players.length}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Stats.propTypes = {
  players: PropTypes.array.isRequired,
};
