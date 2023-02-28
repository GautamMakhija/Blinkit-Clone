import React, { Component } from "react";

//Organisms..
import Header from "./organisms/header";
import ProductContainer from "./organisms/productContainer";

//molecules
import BillingContainer from "./molecules/billingContainer";

//CSS
import "./mainContainer.scss";

class MainContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { ...state } = this.props.state;
    return (
      <section className="mainContainer">
        <Header parentThisObj={parentThisObj} state={state} />
        <ProductContainer parentThisObj={parentThisObj} state={state} />
        <BillingContainer selectedItem={state.selectedItem} />
      </section>
    );
  }
}

export default MainContainer;
