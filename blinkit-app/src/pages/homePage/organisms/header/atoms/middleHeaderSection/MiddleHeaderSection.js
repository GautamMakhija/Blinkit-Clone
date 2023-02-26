import React, { Component } from "react";

//CSS
import "./middleHeaderSection.scss";

class MiddleHeaderSection extends Component {
  render() {
    const { className, renderFunction } = this.props.middleHeaderConfig;
    return <div className={className}>{renderFunction(this.props)}</div>;
  }
}

export default MiddleHeaderSection;
