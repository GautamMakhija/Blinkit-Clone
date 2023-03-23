import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Header from "../../../../../../organisms/header";
import ProductContainer from "./organisms/productContainer";

//constants
import { HEADER_TEXT } from "./constants/productSection.general";
import { HEADER_CONFIG } from "./constants/productSection.general";

//CSS
import "./productSection.scss";

function ProductSection() {
  const filterValue = useSelector((state) => state.filterValue);
  const dispatch = useDispatch();
  return (
    <div className="productSection">
      <Header
        {...{ dispatch, filterValue }}
        headerText={HEADER_TEXT}
        {...HEADER_CONFIG}
      />
      <ProductContainer />
    </div>
  );
}

export default ProductSection;
