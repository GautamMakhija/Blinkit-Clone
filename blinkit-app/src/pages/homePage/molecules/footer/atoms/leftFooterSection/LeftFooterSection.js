import React, { Component } from "react";

class LeftFooterSection extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="leftFooterSection">
        <p className="address">{info}</p>
      </div>
    );
  }
}

export default LeftFooterSection;
