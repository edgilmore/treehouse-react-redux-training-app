import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm
          newGuestSubmitHandler={this.props.newGuestSubmitHandler}
          handleNameInput={this.props.handleNameInput}
          pendingGuest={this.props.pendingGuest}
        />
      </header>
    );
  }
}

Header.prototypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};
