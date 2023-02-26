import React, { Component } from "react";

class MiddleFooterSection extends Component {
  render() {
    return (
      <div className="middleFooterSection">
        <p className="downloadText">Download App</p>
        <img className="appStoreImg"
          src="https://blinkit.com/d61019073b700ca49d22.png"
          alt="Appstore"
        />
        <img className="playStoreImg"
          src="https://blinkit.com/8ed033800ea38f24c4f0.png"
          alt="Playstore"
        />
      </div>
    );
  }
}

export default MiddleFooterSection;
