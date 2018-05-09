import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  render() {
    return (
      <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{this.props.numberAttending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{this.props.numberUnconfirmed}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{this.props.totalInvited}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Counter.propTypes = {
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number,
};
