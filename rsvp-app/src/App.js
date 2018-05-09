import React, { Component } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './css/App.css';

let lastGuestId = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      isFiltered: false,
      pendingGuest: '',
    };
  }

  getGuestId = () => {
    const id = lastGuestId;
    lastGuestId += 1;
    return id;
  };
  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.reduce((total, guest) => (guest.isConfirmed ? total + 1 : total), 0);

  toggleGuestPropertyAt = (property, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        if (guest.id === id) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });
  };

  toggleConfirmationAt = id => {
    this.toggleGuestPropertyAt('isConfirmed', id);
  };

  toggleEditingAt = id => {
    this.toggleGuestPropertyAt('isEditing', id);
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
          id: this.getGuestId(),
        },
        ...this.state.guests,
      ],
      pendingGuest: '',
    });
  };

  removeGuestAt = id => {
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id),
    });
  };

  setNameAt = (name, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        if (guest.id === id) {
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
