import React from "react";
import { useSelector, useDispatch } from "react-redux";

//helpers
import { renderProductsContainer } from "./helpers/productContainer.general";

//CSS
import "./productContainer.scss";

function ProductContainer() {
  const vegetables = useSelector((state) => state.vegetables);
  const dispatch = useDispatch();
  return (
    <div className="productContainer">
      {renderProductsContainer(vegetables, dispatch)}
    </div>
  );
}

export default ProductContainer;
