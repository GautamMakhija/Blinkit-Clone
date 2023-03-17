import React, { Component } from "react";

//CSS
import "./deliveryInfo.scss";

//constants
import { DELIVERY_TIME } from "../../../../../../constants/general";

//helpers
import { calculateTotalSelectedItemCountAndAmount } from "../../../../../../helpers/general";

//actionCreators
import { handleClearCartBtn } from "../../../../../../redux/actionCreator";

import { connect } from "react-redux";

class DeliveryInfo extends Component {
  render() {
    const { vegetables, handleClearCartBtn } = this.props;
    const selectedItem = calculateTotalSelectedItemCountAndAmount(vegetables);
    return (
      <div className="deliveryInfoContainer">
        <div className="headerText">Place Order</div>
        <div className="subHeaderSection">
          <div>
            <p className="deliveryTiming">
              Delivery in {DELIVERY_TIME} minutes{" "}
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryInfo);
