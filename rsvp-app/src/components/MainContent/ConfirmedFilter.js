import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InviteFilter extends Component {
  render() {
    return (
      <div>
        <h2>Invitees</h2>
        <label htmlFor="">
          <input type="checkbox" onChange={this.props.toggleFilter} checked={this.props.isFiltered} /> Hide those who
          haven't responded
        </label>
      </div>
    );
  }
}

InviteFilter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};
