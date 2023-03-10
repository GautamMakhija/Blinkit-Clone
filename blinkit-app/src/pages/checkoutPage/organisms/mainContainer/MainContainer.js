import React, { Component } from "react";

//components
import DeliveryInfo from "./organisms/deliveryInfo";
import ProductContainer from "./organisms/productContainer";
import BillingContainer from "./molecules/billingContainer";
import EmptyCartContainer from "./organisms/emptyCartContainer";

//CSS
import "./mainContainer.scss";

//constant
import { EMPTY_CART_IMG_DETAIL } from "./constants/mainContainer.general";

//connect state
import { connect } from "react-redux";

//action creator
import { redirectToHomePage } from "../../../../redux/actionCreator";

import { calculateTotalSelectedItemCountAndAmount } from "../../../../helpers/app.general";

class MainContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { ...state } = this.props.state;
    const selectedItemCount = state.selectedItem?.count;
    const selectedItem = calculateTotalSelectedItemCountAndAmount(vegetables);
    if (selectedItem.count === 0)
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
    const { vegetables, redirectToHomePage } = this.props;
    // const selectedItem = calculateTotalSelectedItemCountAndAmount(vegetables);
    return selectedItem.count > 0 ? (
      <section className="mainContainer">
        <Header />
        <ProductContainer />
        <BillingContainer />
      </section>
    ) : (
      <div className="mainContainer">
        <img
          src={EMPTY_CART_IMG_DETAIL.src}
          alt={EMPTY_CART_IMG_DETAIL.altName}
        />
        <button className="redirectToHomepage" onClick={redirectToHomePage}>
          Homepage
        </button>
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
    redirectToHomePage: () => dispatch(redirectToHomePage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
