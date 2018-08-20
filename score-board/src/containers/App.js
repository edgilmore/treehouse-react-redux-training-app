import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';

import '../App.css';

class App extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
  };
  render() {
    const { dispatch, players, selectedPlayerIndex } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    const playerComponents = players.map((player, index) => [
      <Player
        key={index}
        index={index}
        name={player.name}
        score={player.score}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
        playerId={player.id}
      />,
    ]);
    let selectedPlayer = {};
    if(selectedPlayerIndex !== -1) {
      selectedPlayer = players[selectedPlayerIndex];
    }
    
    return (
      <div className="App scoreboard">
        <Header title={this.props.title} players={players} />
        <div className="players">{playerComponents}</div>
        <AddPlayerForm addPlayer={addPlayer} />
        <PlayerDetail selectedPlayer={selectedPlayer} />
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
  players: state.players,
  selectedPlayerIndex: state.selectedPlayerIndex
});

export default connect(mapStateToProps)(App);
