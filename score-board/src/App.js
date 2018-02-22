import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './components/player';
import './App.css';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

class App extends Component {
  render() {
    return (
      <div className="App scoreboard">
        <Header title={this.props.title}/>
        <div className="players">
          <Player name="Player One" />
          <Player name="Player Two" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}

App.defaultProps = {
  title: 'Scoreboard'
}

export default App;
