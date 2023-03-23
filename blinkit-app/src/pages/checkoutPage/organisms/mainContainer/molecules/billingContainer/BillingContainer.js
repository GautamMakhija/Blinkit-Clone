import React from "react";
import { useSelector } from "react-redux";

//components
import AmountBar from "./atoms/amountBar";

//constants
import {
  SHIPPING_CHARGE_DETAILS,
  COUPON_TEXT,
} from "./constants/billingContainer.general";

//helpers
import { renderfinalBillContainer } from "./helpers/billingContainer.general";
import { calculateTotalSelectedItemCountAndAmount } from "../../../../../../helpers/general";

//CSS
import "./billingContainer.scss";

function BillingContainer() {
  const vegetables = useSelector((state) => state.vegetables);
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

export default BillingContainer;
