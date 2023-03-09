import React, { Component } from "react";

//helper function
import {
  renderCartBtn,
  redirectToCheckoutPage,
} from "./helpers/rightHeaderSection.general";

//CSS
import "./rightHeaderSection.scss";

class RightHeaderSection extends Component {
  render() {
    const { selectedItem, parentThisObj, isHomePage } = this.props;
    return (
      <div className="loginCart">
        <div className="login">Login</div>
        <div>
          <button
            className="cart"
            onClick={() =>
              redirectToCheckoutPage(isHomePage, parentThisObj, selectedItem)
            }>
            <div className="cartLogo">🛒</div>
            {renderCartBtn(selectedItem)}
          </button>
        </div>
      </div>
    );
  }
}

export default RightHeaderSection;
