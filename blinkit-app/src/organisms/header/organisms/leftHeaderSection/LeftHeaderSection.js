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

//action creators
import { redirectToHomePage } from "../../../../redux/actionCreator";

//connect state
import { connect } from "react-redux";

class LeftHeaderSection extends Component {
  render() {
    const { redirectToHomePage } = this.props;
    return (
      <div className="leftHeader">
        <div className="logo">
          <img
            src={LOGO_IMG_DETAILS.src}
            alt={LOGO_IMG_DETAILS.alt}
            className="blinkitLogo"
            onClick={redirectToHomePage}
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

const mapDispatchToProps = (dispatch) => {
  return {
    redirectToHomePage: () => dispatch(redirectToHomePage()),
  };
};

export default connect(null, mapDispatchToProps)(LeftHeaderSection);
