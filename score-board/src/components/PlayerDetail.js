import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DateTime} from 'luxon';
export default class PlayerDetail extends Component {
  render() {
    console.log(this.props);
    if(this.props.selectedPlayer.name){
      return (
        <div className="player-detail">
          <h3>{this.props.selectedPlayer.name}</h3>
          <ul>
            <li>
              <span>Score: </span>
              {this.props.selectedPlayer.score}
            </li>
            <li>
              <span>Created: </span>
              {this.props.selectedPlayer.created ? DateTime.fromISO(this.props.selectedPlayer.created).toFormat('MM/dd/yyyy HH:mm:ss') : ''}
            </li>
            <li>
              <span>Updated: </span>
              {this.props.selectedPlayer.updated ? DateTime.fromISO(this.props.selectedPlayer.updated).toFormat('MM/dd/yyyy HH:mm:ss') : ''}</li>
          </ul>
        </div>
      );
    }
    return (
      <div className="player-detail">Click on a player name to see more details</div>
    )
  }
}

PlayerDetail.propType = {
  selectedPlayer: PropTypes.object.isRequired
}
