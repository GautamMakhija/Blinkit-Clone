import React, { Component } from "react";

//CSS
import "./productContainer.scss";

//helper function
import { addProductContainer } from "./helpers/productContainer.general";

//connect state
import { connect } from "react-redux";

class ProductContainer extends Component {
  render() {
    const { vegetables, dispatch } = this.props;
    return (
      <div className="productContainer">
        {addProductContainer(vegetables, dispatch)}
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
