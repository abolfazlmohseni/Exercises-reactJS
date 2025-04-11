import React, { Component } from "react";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: 0,
    };
    this.addnumberHandler = this.addnumberHandler.bind(this);
    this.minNumberHandler = this.minNumberHandler.bind(this);
  }
  addnumberHandler() {
    this.setState({
      numbers: this.state.numbers + 1,
    });
  }
  minNumberHandler() {
    this.setState({
      numbers: this.state.numbers - 1,
    });
  }
  render() {
    return (
      <div>
        <p>تعداد کلیک ها :{this.state.numbers}</p>
        <button onClick={this.addnumberHandler}>اضافه کردن</button>
        <button onClick={this.minNumberHandler}>کم کردن</button>
      </div>
    );
  }
}
