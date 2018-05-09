import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GuestName extends Component {
  render() {
    if (this.props.isEditing) {
      return <input type="text" value={this.props.children} onChange={this.props.handleNameEdits} />;
    }
    return <span>{this.props.children}</span>;
  }
}

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
};
