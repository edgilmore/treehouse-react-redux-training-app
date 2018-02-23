import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
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
          <ul>
            <li>
              <span>Safia</span>
            </li>
            <li>
              <span>Iver</span>
              <label htmlFor="">
                <input type="checkbox" checked="checked" /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li>
              <span>Corrina</span>
              <label htmlFor="">
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li>
              <span>Joel</span>
              <label htmlFor="">
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
