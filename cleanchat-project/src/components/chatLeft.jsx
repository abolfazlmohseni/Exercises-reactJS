import React, { Component } from "react";

export default class ChatLeft extends Component {
  render() {
    return (
      <div className="chat chat-left">
        <div className="chat-avatar">
          <a
            className="avatar avatar-online"
            data-toggle="tooltip"
            href="#"
            data-placement="left"
            title=""
            data-original-title="Edward Fletcher"
          >
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              alt="..."
            />
            <i></i>
          </a>
        </div>
        <div className="chat-body">
          <div className="chat-content">
            <p>Well, I am just looking around.</p>
            <time className="chat-time" dateTime="2015-07-01T11:39">
              11:39:57 am
            </time>
          </div>
        </div>
      </div>
    );
  }
}
