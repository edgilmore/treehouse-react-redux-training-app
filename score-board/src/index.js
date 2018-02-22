import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const PLAYERS = [
  {
    id: 1,
    name: 'Player One',
    score: 0,
  },
  {
    id: 2,
    name: 'Player Two',
    score: 0,
  },
];

ReactDOM.render(<App title="My Scoreboard" players={PLAYERS} />, document.getElementById('root'));

