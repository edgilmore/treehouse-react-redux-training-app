import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

import INITAL_STATE from '../utils/constants';
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITAL_STATE;
  }
  onScoreChange = (id, delta) => {
    this.setState({
      players: this.state.players.map(player => {
        if (player.id === id) {
          // eslint-disable-next-line
          return {
            ...player,
            // eslint-disable-next-line
            ['score']: (player['score'] += delta),
          };
        }
        return { ...player };
      }),
    });
  };
  onAddPlayer = name => {
    this.setState({
      players: [{ name, score: 0 }, ...this.state.players],
    });
  };
  onRemovePlayer = id => {
    this.setState({
      players: this.state.players.filter(player => player.id !== id),
    });
  };
  render() {
    return (
      <div className="App scoreboard">
        <Header title={this.props.title} players={this.state.players} />
        <div className="players">
          {this.state.players.map(player => [
            <Player
              name={player.name}
              score={player.score}
              onRemove={() => this.onRemovePlayer(player.id)}
              key={player.id}
              onScoreChange={this.onScoreChange}
              playerId={player.id}
            />,
          ])}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

App.defaultProps = {
  title: 'Scoreboard',
};
