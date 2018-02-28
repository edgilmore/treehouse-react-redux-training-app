import React from 'react';
import PropTypes from 'prop-types';

class GuestList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.guests.map((guest, index) => {
          return <li key={index}>
            <span>{guest.name}</span>
            <label htmlFor="">
              <input type="checkbox" checked={guest.isConfirmed} /> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
          </li>;
        })}
      </ul>
    );
  }
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
};

export default GuestList;
