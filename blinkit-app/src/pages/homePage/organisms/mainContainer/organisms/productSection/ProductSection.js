import React, { Component } from "react";

//Organisms
import Header from "./organisms/header";
import ProductContainer from "./organisms/productContainer";

//CSS
import "./productSection.scss";

//constants
import { HEADER_TEXT } from "./constants/productSection.general";

class ProductSection extends Component {
  render() {
    return (
      <div className="productSection">
        <Header headerText={HEADER_TEXT} />
        <ProductContainer />
      </div>
    );
  }
}

export default ProductSection;
