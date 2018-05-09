import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  onNameChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({
      name: '',
    });
  };
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Player Name" />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
}
