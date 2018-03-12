import React from 'react';
import PropTypes from 'prop-types';

export default class Guest extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <label>
          <input type="checkbox" checked={this.props.isConfirmed} onChange={this.props.handleConfirmation} />
          Confirmed
        </label>
        <button onClick={this.props.handleToggleEditing}>edit</button>
        <button>remove</button>
      </li>
    );
  }
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
};
