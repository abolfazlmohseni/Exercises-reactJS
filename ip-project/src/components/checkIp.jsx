import React, { Component } from "react";
import Loding from "./loding";
import checkip from "./getData";
import "./style.css";
import Card from "./card";
export default class CheckIp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ip: null,
        city: null,
        country: null,
        isp: null,
        latitude: null,
        longitude: null,
        country_flag: null,
      },
    };
  }
  componentDidMount() {
    try {
      checkip().then((res) => {
        res.json().then((rezalt) => {
          this.setState({ data: rezalt });
        });
      });
    } catch (err) {
      console.error("error", err);
    }
  }

  render() {
    if (this.state.data.ip === null) {
      return <Loding />;
    }

    return <Card data={this.state.data}/>;
  }
}
