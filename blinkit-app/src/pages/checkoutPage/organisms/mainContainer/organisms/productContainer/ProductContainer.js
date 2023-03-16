import React, { Component } from "react";

//CSS
import "./productContainer.scss";

//helper function
import { renderProductsContainer } from "./helpers/productContainer.general";

class ProductContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { vegetables, selectedItem } = this.props.state;
    return (
      <div className="productContainer">
        {renderProductsContainer(vegetables, parentThisObj, selectedItem)}
      </div>
    );
  }
}

export default ProductContainer;
