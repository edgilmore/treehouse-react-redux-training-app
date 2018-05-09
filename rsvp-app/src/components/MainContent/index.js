import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

export default class MainContent extends Component {
  render() {
    return (
      <div className="main">
        <ConfirmedFilter toggleFilter={this.props.toggleFilter} isFiltered={this.props.isFiltered} />
        <Counter
          numberAttending={this.props.numberAttending}
          numberUnconfirmed={this.props.numberUnconfirmed}
          totalInvited={this.props.totalInvited}
        />
        <GuestList
          guests={this.props.guests}
          toggleConfirmationAt={this.props.toggleConfirmationAt}
          toggleEditingAt={this.props.toggleEditingAt}
          removeGuestAt={this.props.removeGuestAt}
          setNameAt={this.props.setNameAt}
          isFiltered={this.props.isFiltered}
          pendingGuest={this.props.pendingGuest}
        />
      </div>
    );
  }
}

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number,
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.func.isRequired,
};
