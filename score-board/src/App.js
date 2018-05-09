import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './components/player';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App scoreboard">
        <Header title={this.props.title} players={this.props.players} />
        <div className="players">
          {this.props.players.map(player => [<Player name={player.name} score={player.score} key={player.id} />])}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

App.defaultProps = {
  title: 'Scoreboard',
};

export default App;
