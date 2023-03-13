import React, { Component } from "react";

//Organisms
import Header from "./organisms/header";
import ProductContainer from "./organisms/productContainer";

//CSS
import "./productSection.scss";

//constants
import {HEADER_TEXT} from "./constants/productSection.general"

class ProductSection extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { ...state } = this.props.state;
    return (
      <div className="productSection">
        <Header parentThisObj={parentThisObj} headerText={HEADER_TEXT} />
        <ProductContainer parentThisObj={parentThisObj} state={state} />
      </div>
    );
  }
}

export default ProductSection;
