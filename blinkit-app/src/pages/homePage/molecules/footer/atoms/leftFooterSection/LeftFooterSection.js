import React, { Component } from "react";

class LeftFooterSection extends Component {
  render() {
    return (
      <div className="leftFooterSection">
        <p className="address">
         {this.props.info}
        </p>
      </div>
    );
  }
}

export default LeftFooterSection;
