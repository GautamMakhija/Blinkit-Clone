//constants
import { SOURCE_IMG_DETAIL } from "../constants/productContainer.general";

//actionCreators
import { addItemInCart } from "../../../../../../../../../redux/actionCreator";

//helpers
import { renderPlusMinusBtnWithQuantities } from "../../../../../../../../../helpers/general";

const renderAddBtn = (vegetable, dispatch) => {
  return (
    <div className="addingBtnDiv">
      <button
        className={"addingBtn addingBtn-" + vegetable.vegetableId}
        index={vegetable.vegetableId}
        onClick={() => dispatch(addItemInCart(vegetable.itemId))}>
        ADD
      </button>
    </div>
  );
};
export const renderProductsContainer = (vegetables, dispatch) => {
  return vegetables.map((vegetable) => {
    return (
      <div
        key={vegetable.key}
        id={vegetable.vegetableId}
        className={"productProperty " + vegetable.visibility}>
        <div className="productOffer">{vegetable.offer}</div>
        <img src={vegetable.imgSrc} alt="vegetable" className="productImage" />

        <div className="productSource">
          {SOURCE_IMG_DETAIL}
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
            ? renderAddBtn(vegetable, dispatch)
            : renderPlusMinusBtnWithQuantities(vegetable, dispatch)}
        </div>
      </div>
    );
  });
};
