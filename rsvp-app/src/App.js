import React, { Component } from 'react';
import GuestList from './components/GuestList';
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
    };
  }

  // getTotalInvited = () => this.state.guests.length;
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>
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

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form action="">
            <input type="text" value="" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label htmlFor="">
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
