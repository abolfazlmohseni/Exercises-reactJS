import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    setInterval(this.tick.bind(this), 1000);
  }

  render() {
    return (
      <div>
        <h2 className="time">{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
}
