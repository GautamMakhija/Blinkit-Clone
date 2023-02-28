//constants
import { SOURCE_IMG } from "../constants/productContainer.general";

import {
  addItemInCart,
  renderPlusMinusBtnWithQuantities,
} from "../../../../../../.././../../helpers/general";

const renderAddBtn = (vegetable, parentThisObj, vegetables, selectedItem) => {
  return (
    <div className="addingBtnDiv">
      <button
        className={"addingBtn addingBtn-" + vegetable.vegetableId}
        index={vegetable.vegetableId}
        onClick={() =>
          addItemInCart(
            vegetable.itemId,
            parentThisObj,
            vegetables,
            selectedItem
          )
        }>
        ADD
      </button>
    </div>
  );
};

export const renderProductsContainer = (
  vegetables,
  parentThisObj,
  selectedItem,
  isHomePage
) => {
  return vegetables.map((vegetable) => {
    return (
      <div
        key={vegetable.key}
        id={vegetable.vegetableId}
        className={"productProperty " + vegetable.visibility}>
        <div className="productOffer">{vegetable.offer}</div>
        <img src={vegetable.imgSrc} alt="vegetable" className="productImage" />

        <div className="productSource">
          {SOURCE_IMG}
          Sourced at {vegetable.source}
        </div>

        <div className="productContainerdetail">
          <p className="productName"> {vegetable.name}</p>
          <p className="productWeight">{vegetable.weight}</p>
        </div>

        <div className="productContainerFooter">
          <div>
            <p className="productNewPrice"> ₹{vegetable.currentPrice}</p>
            <p className="productOldPrice">₹{vegetable.oldPrice}</p>
          </div>

          {vegetable.quantity === 0
            ? renderAddBtn(vegetable, parentThisObj, vegetables, selectedItem)
            : renderPlusMinusBtnWithQuantities(
                vegetable,
                parentThisObj,
                vegetables,
                selectedItem,
                isHomePage
              )}
        </div>
      </div>
    );
  });
};
