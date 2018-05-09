import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

export default class GuestList extends React.Component {
  render() {
    return (
      <ul>
        <PendingGuest name={this.props.pendingGuest} />
        {this.props.guests
          .filter(guest => !this.props.isFiltered || guest.isConfirmed)
          .map((guest, index) => (
            <Guest
              key={index}
              name={guest.name}
              isConfirmed={guest.isConfirmed}
              isEditing={guest.isEditing}
              handleConfirmation={() => this.props.toggleConfirmationAt(guest.id)}
              handleToggleEditing={() => this.props.toggleEditingAt(guest.id)}
              handleRemoveGuest={() => this.props.removeGuestAt(guest.id)}
              setName={text => this.props.setNameAt(text, guest.id)}
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
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};
