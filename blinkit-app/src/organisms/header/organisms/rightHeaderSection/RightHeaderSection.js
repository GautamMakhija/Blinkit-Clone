import React, { Component } from "react";

//helper function
import {
  displayCartContent,
  gotoCheckoutPage,
} from "./helpers/rightHeaderSection.general";

//CSS
import "./rightHeaderSection.scss";

class RightHeaderSection extends Component {
  render() {
    const { selectedItem, isHomePage, parentThisObj } = this.props;
    return (
      <div className="loginCart">
        <div className="login">Login</div>
        <div>
          <button
            className="cart"
            onClick={() =>
              gotoCheckoutPage(isHomePage, parentThisObj, selectedItem)
            }>
            <div className="cartLogo">🛒</div>
            {displayCartContent(selectedItem)}
          </button>
        </div>
      </div>
    );
  }
}

export default RightHeaderSection;
