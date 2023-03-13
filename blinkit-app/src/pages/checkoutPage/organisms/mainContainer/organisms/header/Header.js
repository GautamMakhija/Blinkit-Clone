import React, { Component } from "react";

//CSS
import "./header.scss";

//connect state
import { connect } from "react-redux";

//action creator
import { handleClearCartBtn } from "../../../../../../redux/actionCreator";

import { calculateTotalSelectedItemCountAndAmount } from "../../../../../../helpers/app.general";
class Header extends Component {
  render() {
    const { vegetables, handleClearCartBtn } = this.props;
    const selectedItem =calculateTotalSelectedItemCountAndAmount(vegetables);
    return (
      <div className="headerSection">
        <div className="headerText">Place Order</div>
        <div className="subHeaderSection">
          <div>
            <p className="deliveryTiming">Delivery in 10 minutes </p>
            <p id="selectedItemCount"> {selectedItem.count} items</p>
          </div>
          <div>
            <button className="clearCartBtn" onClick={handleClearCartBtn}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    vegetables: state.vegetables,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClearCartBtn: () => dispatch(handleClearCartBtn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
