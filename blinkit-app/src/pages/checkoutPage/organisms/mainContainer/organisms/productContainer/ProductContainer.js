import React, { Component } from "react";

//helpers
import { renderProductsContainer } from "./helpers/productContainer.general";

//CSS
import "./productContainer.scss";

//connectState
import { connect } from "react-redux";

class ProductContainer extends Component {
  render() {
    const { vegetables, dispatch } = this.props;
    return (
      <div className="productContainer">
        {renderProductsContainer(vegetables, dispatch)}
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
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
