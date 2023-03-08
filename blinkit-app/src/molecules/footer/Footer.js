import React, { Component } from "react";

//atoms
import LeftFooterSection from "./atoms/leftFooterSection";
import MiddleFooterSection from "./atoms/middleFooterSection";
import RightFooterSection from "./atoms/rightFooterSection";

//CSS
import "./footer.scss";

//constants
import { BLINKIT_INFO } from "./constants/footer.general";

export class Footer extends Component {
  leftFooterSection = (<LeftFooterSection info={BLINKIT_INFO} />);
  middleFooterSection = (<MiddleFooterSection />);
  rightFooterSection = (<RightFooterSection />);
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
