import React, { Component } from "react";

//components
import AmountBar from "./atoms/amountBar";

//constants
import {
  SHIPPING_CHARGE_DETAILS,
  COUPON_TEXT,
} from "./constants/billingContaine.general";

//helpers
import { renderfinalBillContainer } from "./helpers/billingContainer.general";

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
        <AmountBar
          text="MRP"
          className="selectedItemMrp"
          amountId="selectedItemOldAmount"
          amount={selectedItem.oldAmount}
        />
        <AmountBar
          text="Product discount"
          className="discountContainer"
          amountId="totalDiscount"
          amount={selectedItem.amount - selectedItem.oldAmount}
        />
        <AmountBar
          text="Delivery charge"
          className="deliveryCharge"
          amountId="shippingDetail"
          amount={SHIPPING_CHARGE_DETAILS}
        />
        <AmountBar
          text="Grant total"
          className="grantTotalOfSelectedItems"
          amountId="grantTotal"
          amount={selectedItem.amount}
        />
        <div className="coupons">{COUPON_TEXT}</div>
        <div className="finalBillContainer">
          {renderfinalBillContainer(selectedItem)}
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
