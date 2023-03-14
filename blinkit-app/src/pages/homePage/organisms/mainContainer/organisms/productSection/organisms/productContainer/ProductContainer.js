import React, { Component } from "react";

//helpers
import { renderProductsContainer } from "./helpers/productContainer.general";

//CSS
import "./productContainer.scss";

class ProductContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { vegetables, selectedItem } = this.props.state;
    const ProductsContainer = renderProductsContainer(
      vegetables,
      parentThisObj,
      selectedItem
    );
    return <div className="productContainer">{ProductsContainer}</div>;
  }
}

export default ProductContainer;
