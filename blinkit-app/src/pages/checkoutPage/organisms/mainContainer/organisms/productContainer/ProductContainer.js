import React, { Component } from "react";

//CSS
import "./productContainer.scss";

//helper function
import { addProductContainer } from "./helpers/productContainer.general";

class ProductContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { vegetables, selectedItem,isHomePage } = this.props.state;
    return (
      <div className="productContainer">
        {addProductContainer(vegetables, parentThisObj, selectedItem,isHomePage)}
      </div>
    );
  }
}

export default ProductContainer;
