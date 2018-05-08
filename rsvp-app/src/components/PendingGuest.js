import React from 'react';
import PropTypes from 'prop-types';

export default class PendingGuest extends React.Component {
  render() {
    if (this.props.name) {
      return (
        <li>
          <span>{this.props.name}</span>
        </li>
      );
    }
    return null;
  }
}

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
};
