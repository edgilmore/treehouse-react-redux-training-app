import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './stats';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Stats players={this.props.players} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
