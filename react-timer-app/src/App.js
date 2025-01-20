import React, { Component } from "react";
import Timer from "./Timer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    };
  }

  toggleTimer = () => {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }));
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="title">React Timer App</h1>
        <button onClick={this.toggleTimer} className="update-button">
          {this.state.showTimer ? "Hide" : "Show"}
        </button>
        {this.state.showTimer && <Timer />}
      </div>
    );
  }
}

export default App;
