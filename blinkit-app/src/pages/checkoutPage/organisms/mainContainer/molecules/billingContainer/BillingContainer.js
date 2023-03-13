import React, { Component } from "react";

//CSS
import "./billingContainer.scss";

//connect state
import { connect } from "react-redux";

//constant
import { SHIPPING_CHARGE } from "./constants/billingContainer.general";

//helper
import { calculateTotalSelectedItemCountAndAmount } from "../../../../../../helpers/app.general";

export class BillingContainer extends Component {
  render() {
    const { vegetables } = this.props;
    const selectedItem = calculateTotalSelectedItemCountAndAmount(vegetables);

    return (
      <div className="billingContainer">
        <div className="selectedItemMrp">
          <p>MRP</p>
          <p id="selectedItemOldAmount">₹{selectedItem.oldAmount}</p>
        </div>
        <div className="discountContainer">
          <p>Product discount</p>
          <p id="totalDiscount">
            -₹{selectedItem.oldAmount - selectedItem.amount}
          </p>
        </div>
        <div className="deliveryCharge">
          <p>Delivery charge</p>
          <p>
            {" "}
            <span className="shippingCharge">₹{SHIPPING_CHARGE}</span>{" "}
            <span className="freeText">FREE</span>
          </p>
        </div>
        <div className="grantTotalOfSelectedItems">
          <p>Grant total</p>
          <p>₹{selectedItem.amount}</p>
        </div>
        <div className="coupons">
          Coupons are only applicable on the Blinkit app
        </div>
        <div className="finalBillContainer">
          <div className="leftSectionOfFinalBill">
            <div>
              {" "}
              {selectedItem.count} items • ₹{selectedItem.amount}
              <span className="finalOldAmountOfSelectedItems">
                ₹{selectedItem.oldAmount}
              </span>
            </div>
            <div className="proceedForPayment">Proceed {">"} </div>
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

export default connect(mapStateToProps)(BillingContainer);
