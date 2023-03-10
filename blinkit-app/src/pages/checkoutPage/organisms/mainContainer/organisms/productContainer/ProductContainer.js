import React, { Component } from "react";

//CSS
import "./productContainer.scss";

//helper function
import { renderProductsContainer } from "./helpers/productContainer.general";

//connect state
import { connect } from "react-redux";

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
