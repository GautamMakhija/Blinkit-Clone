import React, { Component } from "react";

//Organisms..
import Header from "./organisms/header";
import ProductContainer from "./organisms/productContainer";

//molecules
import BillingContainer from "./molecules/billingContainer";

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
    const { vegetables, redirectToHomePage } = this.props;
    const selectedItem = calculateTotalSelectedItemCountAndAmount(vegetables);
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
