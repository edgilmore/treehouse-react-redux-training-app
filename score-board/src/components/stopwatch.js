import React, { Component } from 'react';
import { DateTime } from 'luxon';

export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      previousTime: 0,
      elapsedTime: DateTime.local().set({ second: 0 }),
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.onTick);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onStart = () => {
    this.setState({
      running: !this.state.running,
      previousTime: DateTime.local(),
    });
  };
  onStop = () => {
    this.setState({
      running: !this.state.running,
      previousTime: DateTime.local(),
    });
  };
  onReset = () => {
    this.setState({
      elapsedTime: DateTime.local().set({ second: 0 }),
      previousTime: DateTime.local(),
    });
  };
  onTick = () => {
    if (this.state.running) {
      const now = DateTime.local();
      this.setState({
        elapsedTime: this.state.elapsedTime + now.diff(this.state.previousTime),
        previousTime: DateTime.local(),
      });
    }
  };
  render() {
    const seconds = Math.floor(this.state.elapsedTime.second / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time"> {seconds} </div>
        {this.state.running ? (
          <button onClick={this.onStop}>Stop</button>
        ) : (
          <button onClick={this.onStart}>Start</button>
        )}
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}
