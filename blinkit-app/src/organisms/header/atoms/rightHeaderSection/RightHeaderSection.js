import React, { Component } from "react";

//CSS
import "./rightHeaderSection.scss";

class RightHeaderSection extends Component {
  render() {
    const { className, renderFunction } = this.props.rightHeaderConfig;
    return <div className={className}>{renderFunction(this.props)}</div>;
  }
}

export default RightHeaderSection;
