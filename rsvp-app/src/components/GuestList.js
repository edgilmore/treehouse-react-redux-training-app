import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

export default class GuestList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.guests.map((guest, index) => (
          <Guest
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            handleConfirmation={() => this.props.toggleConfirmationAt(index)}
            handleToggleEditing={() => this.props.toggleEditingAt(index)}
          />
        ))}
      </ul>
    );
  }
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
};
