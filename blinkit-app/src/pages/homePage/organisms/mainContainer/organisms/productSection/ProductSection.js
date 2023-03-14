import React, { Component } from "react";

//Components
import Header from "../../../../../../organisms/header";
import ProductContainer from "./organisms/productContainer";

//constants
import {HEADER_TEXT} from "./constants/productSection.general"
import { HEADER_CONFIG } from "./constants/productSection.general";

//CSS
import "./productSection.scss";

class ProductSection extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    const { ...state } = this.props.state;
    return (
      <div className="productSection">
        <Header parentThisObj={parentThisObj} headerText={HEADER_TEXT} {...HEADER_CONFIG}/>
        <ProductContainer parentThisObj={parentThisObj} state={state} />
      </div>
    );
  }
}

export default ProductSection;
