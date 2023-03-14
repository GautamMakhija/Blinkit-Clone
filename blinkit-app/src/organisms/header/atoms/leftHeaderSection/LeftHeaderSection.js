import React, { Component } from "react";

//CSS
import "./leftHeaderSection.scss";

class LeftHeaderSection extends Component {
  render() {
    const { className, renderFunction } = this.props.leftHeaderConfig;
    return <div className={className}>{renderFunction(this.props)}</div>;
  }
}

export default LeftHeaderSection;
