import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player';
import App from './containers/App';

import './index.css';

const store = createStore(PlayerReducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <App title="My Scoreboard" />
  </Provider>,
  document.getElementById('root'),
);
