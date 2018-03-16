import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

export default class GuestList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.guests
          .filter(guest => !this.props.isFilter || guest.isConfirmed)
          .map((guest, index) => (
            <Guest
              key={index}
              name={guest.name}
              isConfirmed={guest.isConfirmed}
              isEditing={guest.isEditing}
              handleConfirmation={() => this.props.toggleConfirmationAt(index)}
              handleToggleEditing={() => this.props.toggleEditingAt(index)}
              setName={text => this.props.setNameAt(text, index)}
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
  isFilter: PropTypes.bool.isRequired,
};
