import React, { Component } from "react";
import Timer from "./timer";
class Buttun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTime: true,
    };
    this.toggelTimer = this.toggelTimer.bind(this);
  }
  toggelTimer() {
    this.setState((state) => {
      return {
        showTime: !state.showTime,
      };
    });
  }
  render() {
    const showTime = this.state.showTime;
    return (
      <>
        {showTime && <Timer />}
        <button onClick={this.toggelTimer}>
          {showTime ? "hide Timer" : "show timer"}
        </button>
      </>
    );
  }
}

export default Buttun;
