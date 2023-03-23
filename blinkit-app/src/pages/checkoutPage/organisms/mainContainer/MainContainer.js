import React from "react";
import { useSelector } from "react-redux";

//components
import DeliveryInfo from "./organisms/deliveryInfo";
import ProductContainer from "./organisms/productContainer";
import BillingContainer from "./molecules/billingContainer";
import EmptyCartContainer from "./organisms/emptyCartContainer";

//CSS
import "./mainContainer.scss";

//helpers
import { calculateTotalSelectedItemCountAndAmount } from "../../../../helpers/general";

function MainContainer() {
  const vegetables = useSelector((state) => state.vegetables);
  const selectedItem = calculateTotalSelectedItemCountAndAmount(vegetables);
  if (selectedItem.count === 0) return <EmptyCartContainer />;
  return (
    <section className="mainContainer">
      <DeliveryInfo />
      <ProductContainer />
      <BillingContainer />
    </section>
  );
}

export default MainContainer;
