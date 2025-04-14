import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.upTime = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      this.setState({
        timer: time,
      });
      console.log(this.state.timer);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.upTime);
  }
  render() {
    return <h1>{this.state.timer}</h1>;
  }
}

export default Timer;
