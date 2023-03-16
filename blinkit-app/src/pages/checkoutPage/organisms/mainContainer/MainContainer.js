import React, { Component } from "react";

//components
import DeliveryInfo from "./organisms/deliveryInfo";
import ProductContainer from "./organisms/productContainer";
import BillingContainer from "./molecules/billingContainer";
import EmptyCartContainer from "./organisms/emptyCartContainer";

//CSS
import "./mainContainer.scss";

class MainContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { ...state } = this.props.state;
    const selectedItemCount = state.selectedItem?.count;

    if (selectedItemCount === 0)
      return (
        <EmptyCartContainer
          isHomePage={state.isHomePage}
          parentThisObj={parentThisObj}
        />
      );
    return  (
      <section className="mainContainer">
        <DeliveryInfo parentThisObj={parentThisObj} state={state} />
        <ProductContainer parentThisObj={parentThisObj} state={state} />
        <BillingContainer selectedItem={state.selectedItem} />
      </section>
    ) 
  }
}

export default MainContainer;
