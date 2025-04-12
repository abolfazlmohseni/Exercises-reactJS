import React, { Component } from "react";
import Chats from "./masseg";
export default class Panelbody extends Component {
  render(props) {
    return (
      <div className="panel-body">
        <div className="chats">
          <Chats chatList={this.props.chatList} />
        </div>
      </div>
    );
  }
}
