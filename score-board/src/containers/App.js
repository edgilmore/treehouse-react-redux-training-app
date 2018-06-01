import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

import INITAL_STATE from '../utils/constants';
import '../App.css';

class App extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
  };

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
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => [
      <Player
        key={index}
        name={player.name}
        score={player.score}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />,
    ]);
    return (
      <div className="App scoreboard">
        <Header title={this.props.title} players={players} />
        <div className="players">{playerComponents}</div>
        <AddPlayerForm onAdd={addPlayer} />
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

const mapStateToProps = state => ({
  players: state,
});

export default connect(mapStateToProps)(App);
