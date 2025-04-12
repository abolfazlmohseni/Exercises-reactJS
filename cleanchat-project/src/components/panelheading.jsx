import React, { Component } from "react";

export default class Panelheading extends Component {
  render() {
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          <i className="icon wb-chat-text" aria-hidden="true"></i>{" "}
          {this.props.nameuser}
        </h3>
      </div>
    );
  }
}
