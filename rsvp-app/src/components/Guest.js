import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

export default class Guest extends React.Component {
  render() {
    return (
      <li>
        <GuestName isEditing={this.props.isEditing} handleNameEdits={event => this.props.setName(event.target.value)}>
          {this.props.name}
        </GuestName>
        <label>
          <input type="checkbox" checked={this.props.isConfirmed} onChange={this.props.handleConfirmation} />
          Confirmed
        </label>
        <button onClick={this.props.handleToggleEditing}>{this.props.isEditing ? 'save' : 'edit'}</button>
        <button onClick={this.props.handleRemoveGuest}>remove</button>
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
  handleRemoveGuest: PropTypes.func.isRequired,
};
