import React, { Component } from "react";
import Sidebar from "./sidbar";
import Boxses from "./Boxses";

export default class Boxes extends Component {

  state = {
    boxNames: [
      { id: 1, titel: "box 1" },
      { id: 2, titel: "box 2" },
      { id: 3, titel: "box 3" },
      { id: 4, titel: "box 4" },
    ],
    activeCode: [1, 2, 3, 4],
  };

  toggelhandelr(id) {
    const activeCode = [...this.state.activeCode];
    if (activeCode.includes(id)) {
      activeCode.splice(activeCode.indexOf(id), 1);
    } else {
      activeCode.push(id);
    }
    this.setState((state) => {
      return {
        ...state,
        activeCode,
      };
    });
  }
  
  render() {
    return (
      <>
        <Sidebar
          boxName={this.state.boxNames}
          activeCoded={this.state.activeCode}
          event={this.toggelhandelr.bind(this)}
        />
        <Boxses
          boxName={this.state.boxNames}
          activeCoded={this.state.activeCode}
        />
      </>
    );
  }
}
