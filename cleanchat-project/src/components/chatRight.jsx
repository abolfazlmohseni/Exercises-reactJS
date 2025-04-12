import React, { Component } from "react";

export default class ChatRight extends Component {
  render(props) {
    const test = this.props.chatList.map((chat) => {
      return (
        <div className="chat">
          <div className="chat-avatar">
            <a
              className="avatar avatar-online"
              data-toggle="tooltip"
              href="#"
              data-placement="right"
              title=""
              data-original-title="June Lane"
            >
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt="..."
              />
              <i></i>
            </a>
          </div>
          <div className="chat-body">
            <div className="chat-content">
              <p>{chat.text}</p>
              <time className="chat-time" dateTime="2015-07-01T11:37">
                {chat.date}
              </time>
            </div>
          </div>
        </div>
      );
    });
    return <div>{test}</div>;
  }
}
