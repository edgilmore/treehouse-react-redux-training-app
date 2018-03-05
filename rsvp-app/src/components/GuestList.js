import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

export default class GuestList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.guests.map((guest, index) => {
          return <Guest key={index} name={guest.name} isConfirmed={guest.isConfirmed} />;
        })}
      </ul>
    );
  }
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
};
