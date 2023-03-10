import React, { Component } from "react";

//helpers
import { renderProductsContainer } from "./helpers/productContainer.general";

//CSS
import "./productContainer.scss";

import { connect } from "react-redux";
class ProductContainer extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { vegetables, selectedItem } = this.props.state;
    const ProductsContainer = renderProductsContainer(
      vegetables,
      parentThisObj,
      selectedItem
    );
    return <div className="productsContainer">{ProductsContainer}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    vegetables: state.vegetables,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
