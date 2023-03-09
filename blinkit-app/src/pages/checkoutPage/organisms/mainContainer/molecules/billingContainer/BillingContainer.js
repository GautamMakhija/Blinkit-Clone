import React, { Component } from "react";

//CSS
import "./billingContainer.scss";

export class BillingContainer extends Component {
  render() {
    const selectedItem = this.props.selectedItem;
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
            <span className="shippingCharge">₹15</span>{" "}
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

export default BillingContainer;
