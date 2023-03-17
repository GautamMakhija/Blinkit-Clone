import React, { Component } from "react";

//Components
import LeftHeaderSection from "./atoms/leftHeaderSection";
import MiddleHeaderSection from "./atoms/middleHeaderSection";
import RightHeaderSection from "./atoms/rightHeaderSection";

//CSS
import "./header.scss";

class Header extends Component {
  render() {
    const { className } = this.props;

    return (
      <section className={className}>
        <LeftHeaderSection {...this.props} />
        <MiddleHeaderSection {...this.props} />
        <RightHeaderSection {...this.props} />
      </section>
    );
  }
}

Header.defaultProps = {
  leftHeaderConfig: {
    className: "leftHeader",
    renderFunction: () => {},
  },
  middleHeaderConfig: {
    className: "middletHeader",
    renderFunction: () => {},
  },
  rightHeaderConfig: {
    className: "rightHeader",
    renderFunction: () => {},
  },
};

export default Header;
