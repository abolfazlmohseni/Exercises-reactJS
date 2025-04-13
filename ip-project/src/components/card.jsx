import React, { Component } from "react";

class Card extends Component {
  render() {
    const { ip, city, country, isp, latitude, longitude, country_flag } =
      this.props.data;
    return (
      <div className="card-container">
        <span className="info">Info</span>
        <img className="round" src={country_flag} alt={country} />
        <h3>{country}</h3>
        <h6>{city}</h6>
        <p>isp: {isp}</p>
        <div className="footer">
          <p>IP: {ip}</p>
          <p>latitude: {latitude}</p>
          <p>longitude: {longitude}</p>
        </div>
      </div>
    );
  }
}

export default Card;
