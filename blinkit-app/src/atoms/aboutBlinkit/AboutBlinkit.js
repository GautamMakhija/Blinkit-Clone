import React, { Component } from "react";

//CSS
import "./aboutBlinkit.scss";

class AboutBlinkit extends Component {
  render() {
    return (
      <section className="aboutContainer">
        <p className="description">{this.props.description}</p>
      </section>
    );
  }
}

export default AboutBlinkit;
