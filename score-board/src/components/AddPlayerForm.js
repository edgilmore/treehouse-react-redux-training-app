import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  static propTypes = {
    addPlayer: PropTypes.func.isRequired,
  };
  onNameChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  };
  addPlayer = event => {
    event.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({
      name: '',
    });
  };
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Player Name" />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}
