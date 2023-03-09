import React, { Component } from "react";

//CSS
import "./header.scss";

//helper function
import { handleClearCartBtn } from "./helpers/header.general";

class Header extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { vegetables, selectedItem } = this.props.state;
    return (
      <div className="headerSection">
        <div className="headerText">Place Order</div>
        <div className="subHeaderSection">
          <div>
            <p className="deliveryTiming">Delivery in 10 minutes </p>
            <p id="selectedItemCount"> {selectedItem.count} items</p>
          </div>
          <div>
            <button
              className="clearCartBtn"
              onClick={() => {
                handleClearCartBtn(vegetables, parentThisObj, selectedItem);
              }}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
