import React, { Component } from "react";
import Panelheading from "./panelheading";
import Panelbody from "./panelbody";
import Panelfooter from "./panelfooter";
export default class Conteyner extends Component {
  state = {
    name: prompt("Enter your name"),
    chatList: [
      { sender: false, text: "test", date: new Date().toLocaleString() },
      { sender: false, text: "twesdygfkasjdh", date: new Date().toLocaleString()},
    ],
  };
  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Panelheading nameuser={this.state.name} />
            <Panelbody chatList={this.state.chatList} />
            <Panelfooter send={this.send.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  send() {
    const input = document.querySelector(".form-control");
    const inputVal = document.querySelector(".form-control").value;
    if (inputVal != "") {
      this.setState({
        ...this.state,
        chatList: [
          ...this.state.chatList,
          { sender: true, text: inputVal, date: new Date().toLocaleString() },
        ],
      });
      input.value = "";
    } else {
      alert("none");
    }
  }
}
