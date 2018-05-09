import React, { Component } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [
        {
          id: 1,
          name: 'Player One',
          isConfirmed: false,
          isEditing: false,
        },
        {
          id: 2,
          name: 'Player Two',
          isConfirmed: true,
          isEditing: true,
        },
      ],
      isFiltered: false,
      pendingGuest: '',
    };
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.reduce((total, guest) => (guest.isConfirmed ? total + 1 : total), 0);

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });
  };

  toggleConfirmationAt = index => {
    this.toggleGuestPropertyAt('isConfirmed', index);
  };

  toggleEditingAt = index => {
    this.toggleGuestPropertyAt('isEditing', index);
  };

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered,
    });
  };

  handleNameInput = event => {
    this.setState({ pendingGuest: event.target.value });
  };

  newGuestSubmitHandler = event => {
    event.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
        },
        ...this.state.guests,
      ],
      pendingGuest: '',
    });
  };

  removeGuestAt = index => {
    this.setState({
      guests: [...this.state.guests.slice(0, index), ...this.state.guests.slice(index + 1)],
    });
  };

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      }),
    });
  };

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          totalInvited={totalInvited}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          removeGuestAt={this.removeGuestAt}
          setNameAt={this.setNameAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
