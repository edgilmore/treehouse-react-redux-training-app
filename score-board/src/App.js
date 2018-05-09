import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './components/player';
import Header from './components/header';
import AddPlayerForm from './components/AddPlayerForm';

import INITAL_STATE from './utils/constants';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITAL_STATE;
  }
  onScoreChange = (index, delta) => {
    this.state.players[index] += delta;
    this.setState(this.state);
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

export default App;
