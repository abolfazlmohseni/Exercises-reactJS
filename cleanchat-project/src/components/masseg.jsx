import React, { Component } from "react";

export default class Chats extends Component {
  render() {
    const chats = this.props.chatList.map((chat) => {
      return (
        <div className={chat.sender ? "chat" : "chat chat-left"}>
          <div className="chat-avatar">
            <a
              className="avatar avatar-online"
              data-toggle="tooltip"
              href="#"
              data-placement={chat.sender ? "right" : "left"}
              title=""
              data-original-title={
                chat.sender ? "June Lane" : "Edward Fletcher"
              }
            >
              <img
                src={
                  chat.sender
                    ? "https://bootdey.com/img/Content/avatar/avatar2.png"
                    : "https://bootdey.com/img/Content/avatar/avatar1.png"
                }
                alt="..."
              />
              <i></i>
            </a>
          </div>
          <div className="chat-body">
            <div className="chat-content">
              <p>{chat.text}</p>
              <time className="chat-time" dateTime="2015-07-01T11:39">
                {chat.date}
              </time>
            </div>
          </div>
        </div>
      );
    });
    return <div>{chats}</div>;
  }
}
