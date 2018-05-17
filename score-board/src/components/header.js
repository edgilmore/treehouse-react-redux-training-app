import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="header">
        <Stats players={this.props.players} />
        <h1>{this.props.title}</h1>
        <Stopwatch />
      </div>
    );
  }
}
