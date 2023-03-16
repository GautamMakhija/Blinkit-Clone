import React, { Component } from "react";

//constants
import { EMPTY_CART_IMG_DETAIL } from "./constants/emptyCartContainer.general";

//helpers
import { redirectToHomePage } from "../../../../../../helpers/general";

export class EmptyCartContainer extends Component {
  render() {
    const { isHomePage, parentThisObj } = this.props;
    return (
      <div className="mainContainer">
        <img
          src={EMPTY_CART_IMG_DETAIL.src}
          alt={EMPTY_CART_IMG_DETAIL.altName}
        />
        <button
          className="redirectToHomepage"
          onClick={() => redirectToHomePage(isHomePage, parentThisObj)}>
          Homepage
        </button>
      </div>
    );
  }
}

export default EmptyCartContainer;
