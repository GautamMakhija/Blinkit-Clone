import React from "react";
import { useSelector, useDispatch } from "react-redux";

//CSS
import "./deliveryInfo.scss";

//constants
import { DELIVERY_TIME } from "../../../../../../constants/general";

//helpers
import { calculateTotalSelectedItemCountAndAmount } from "../../../../../../helpers/general";

//actionCreators
import { handleClearCartBtn } from "../../../../../../redux/actionCreator";

function DeliveryInfo() {
  const vegetables = useSelector((state) => state.vegetables);
  const dispatch = useDispatch();
  const selectedItem = calculateTotalSelectedItemCountAndAmount(vegetables);
  return (
    <div className="deliveryInfoContainer">
      <div className="headerText">Place Order</div>
      <div className="subHeaderSection">
        <div>
          <p className="deliveryTiming">Delivery in {DELIVERY_TIME} minutes </p>
          <p id="selectedItemCount"> {selectedItem.count} items</p>
        </div>
        <div>
          <button
            className="clearCartBtn"
            onClick={() => dispatch(handleClearCartBtn())}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
