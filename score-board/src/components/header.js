import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './stats';
import Stopwatch from './stopwatch';

export default class Header extends Component {
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
