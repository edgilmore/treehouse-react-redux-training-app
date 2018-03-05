import React from 'react';
import PropTypes from 'prop-types';

export default class Guest extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <label>
          <input type="checkbox" checked={this.props.isConfirmed} /> Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    );
  }
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
};

Guest.toggleConfirmationAt = indexToChange => {
  this.setState({
    guests: this.state.guests.map((guest, index) => {
      if (index === indexToChange) {
        return {
          ...guest,
          isConfirmed: !guest.isConfirmed,
        };
      }
      return guest;
    }),
  });
};
