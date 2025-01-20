import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  updateTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <div className="timer-container">
        <h2 className="time">{this.state.time}</h2>
      </div>
    );
  }
}

export default Timer;
