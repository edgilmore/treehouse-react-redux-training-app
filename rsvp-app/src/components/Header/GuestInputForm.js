import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GuestInputForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.newGuestSubmitHandler}>
        <input
          type="text"
          onChange={this.props.handleNameInput}
          value={this.props.pendingGuest}
          placeholder="Invite Someone"
        />
        <button type="submit" name="submit" value="submit">
          Submit
        </button>
      </form>
    );
  }
}

GuestInputForm.prototypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};
