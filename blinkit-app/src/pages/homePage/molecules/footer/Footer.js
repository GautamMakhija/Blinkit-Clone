import React, { Component } from "react";

//components
import LeftFooterSection from "./atoms/leftFooterSection";
import MiddleFooterSection from "./atoms/middleFooterSection";
import RightFooterSection from "./atoms/rightFooterSection";

//constants
import { BLINKIT_INFO } from "./constants/footer.general";

//CSS
import "./footer.scss";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.leftFooterSection = <LeftFooterSection info={BLINKIT_INFO} />;
    this.middleFooterSection = <MiddleFooterSection />;
    this.rightFooterSection = <RightFooterSection />;
  }
  render() {
    return (
      <section className="fotter">
        {this.leftFooterSection}
        {this.middleFooterSection}
        {this.rightFooterSection}
      </section>
    );
  }
}

export default Footer;
