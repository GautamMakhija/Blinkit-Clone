import React, { Component } from "react";

//components
import DeliveryInfo from "./organisms/deliveryInfo";
import ProductContainer from "./organisms/productContainer";
import BillingContainer from "./molecules/billingContainer";
import EmptyCartContainer from "./organisms/emptyCartContainer";

//CSS
import "./mainContainer.scss";

//connectState
import { connect } from "react-redux";

//helpers
import { calculateTotalSelectedItemCountAndAmount } from "../../../../helpers/general";

class MainContainer extends Component {
  render() {
    const { vegetables } = this.props;
    console.log("vegetables is", vegetables);
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
}
const mapStateToProps = (state) => {
  return {
    vegetables: state.vegetables,
  };
};
export default connect(mapStateToProps)(MainContainer);
