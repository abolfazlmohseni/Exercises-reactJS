import React, { Component } from "react";

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: "",
      userNumberText: 0,
    };
    this.keyHandler = this.keyHandler.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="متن بنویسید"
          onKeyUp={this.keyHandler}
          className="inputText"
        />
        <p>{this.state.userText}</p>
        <h1>{this.state.userNumberText}</h1>
      </div>
    );
  }

  keyHandler() {
    const inputVal = document.querySelector(".inputText").value;
    this.setState({
      userText: inputVal,
      userNumberText: inputVal.length,
    });
  }
}
