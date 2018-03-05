import React from 'react';
import PropTypes from 'prop-types';

class Guest extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <label htmlFor="">
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

export default Guest;
