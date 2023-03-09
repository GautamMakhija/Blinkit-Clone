import React, { Component } from "react";

//molecule
import SelectInput from "../../../../molecules/selectInput";

//CSS
import "./leftHeaderSection.scss";

//constant
import {
  LOCATIONS,
  DELIVERY_TIME,
  LOGO_IMG_DETAILS,
} from "./constants/leftHeaderSection.general";

//helper Function
import { redirectToHomePage } from "../../../../helpers/general";

class LeftHeaderSection extends Component {
  render() {
    const { parentThisObj, isHomePage } = this.props;
    return (
      <div className="leftHeader">
        <div className="logo">
          <img
            src={LOGO_IMG_DETAILS.src}
            alt={LOGO_IMG_DETAILS.alt}
            className="blinkitLogo"
            onClick={() => redirectToHomePage(isHomePage, parentThisObj)}
          />
        </div>
        <div className="location">
          <div className="deliveryTime">
            Delivery in {DELIVERY_TIME} minutes
          </div>
          <SelectInput
            name="Location"
            id="locationOptions"
            values={LOCATIONS}
          />
        </div>
      </div>
    );
  }
}
export default LeftHeaderSection;
