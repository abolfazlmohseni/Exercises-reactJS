import React, { Component } from "react";

export default class Panelfooter extends Component {
  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.props.send}
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
