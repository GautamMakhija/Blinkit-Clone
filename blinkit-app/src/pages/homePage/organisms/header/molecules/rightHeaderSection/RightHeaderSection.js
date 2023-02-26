import React, { Component } from "react";

//helper function
import { renderCartBtn } from "./helpers/rightHeaderSection.general";

//CSS
import "./rightHeaderSection.scss";

class RightHeaderSection extends Component {
  render() {
    const selectedItem = this.props.selectedItem;
    return (
      <div className="loginCart">
        <div className="login">Login</div>
        <div>
          <button className="cart">
            <div className="cartLogo">🛒</div>
            {renderCartBtn(selectedItem)}
          </button>
        </div>
      </div>
    );
  }
}

export default RightHeaderSection;
