import React, { Component } from "react";
import Loding from "./loding";
import "./style.css";
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

  async getIp() {
    const response = await fetch("https://api.ipify.org?format=json");
    return (await response.json()).ip;
  }

  async checkip() {
    const ip = await this.getIp();
    const userdata = await fetch(`http://ipwhois.app/json/${ip}`);
    return userdata;
  }

  componentDidMount() {
    try {
      this.checkip().then((res) => {
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

    return (
      <div className="card-container">
        <span className="info">Info</span>
        <img
          className="round"
          src={this.state.data.country_flag}
          alt={this.state.data.country}
        />
        <h3>{this.state.data.country}</h3>
        <h6>{this.state.data.city}</h6>
        <p>isp: {this.state.data.isp}</p>
        <div className="footer">
          <p>IP: {this.state.data.ip}</p>
          <p>latitude: {this.state.data.latitude}</p>
          <p>longitude: {this.state.data.longitude}</p>
        </div>
      </div>
    );
  }
}
