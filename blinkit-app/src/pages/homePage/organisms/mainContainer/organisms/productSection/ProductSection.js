import React, { Component } from "react";

//Components
import Header from "../../../../../../organisms/header";
import ProductContainer from "./organisms/productContainer";

//constants
import { HEADER_TEXT } from "./constants/productSection.general";
import { HEADER_CONFIG } from "./constants/productSection.general";

//CSS
import "./productSection.scss";

//connectState
import { connect } from "react-redux";

class ProductSection extends Component {
  render() {
    return (
      <div className="productSection">
        <Header {...this.props} headerText={HEADER_TEXT} {...HEADER_CONFIG} />
        <ProductContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(null, mapDispatchToProps)(ProductSection);
