import React, { Component } from "react";

//constants
import { EMPTY_CART_IMG_DETAIL } from "./constants/emptyCartContainer.general";

//helpers
import { redirectToHomePage } from "../../../../../../redux/actionCreator";

//connectState
import { connect } from "react-redux";

export class EmptyCartContainer extends Component {
  render() {
    const { redirectToHomePage } = this.props;
    return (
      <div className="mainContainer">
        <img
          src={EMPTY_CART_IMG_DETAIL.src}
          alt={EMPTY_CART_IMG_DETAIL.altName}
        />
        <button className="redirectToHomepage" onClick={redirectToHomePage}>
          Homepage
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    redirectToHomePage: () => dispatch(redirectToHomePage()),
  };
};

export default connect(null, mapDispatchToProps)(EmptyCartContainer);
