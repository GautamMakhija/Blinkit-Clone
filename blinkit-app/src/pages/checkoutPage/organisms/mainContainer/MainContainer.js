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

//helper
import { redirectToHomePage } from "../../../../helpers/general";

class MainContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { ...state } = this.props.state;
    const selectedItemCount = state.selectedItem?.count;

    return selectedItemCount > 0 ? (
      <section className="mainContainer">
        <Header parentThisObj={parentThisObj} state={state} />
        <ProductContainer parentThisObj={parentThisObj} state={state} />
        <BillingContainer selectedItem={state.selectedItem} />
      </section>
    ) : (
      <div className="mainContainer">
        <img
          src={EMPTY_CART_IMG_DETAIL.src}
          alt={EMPTY_CART_IMG_DETAIL.altName}
        />
        <button
          className="redirectToHomepage"
          onClick={() => redirectToHomePage(state.isHomePage, parentThisObj)}>
          Homepage
        </button>
      </div>
    );
  }
}

export default MainContainer;
