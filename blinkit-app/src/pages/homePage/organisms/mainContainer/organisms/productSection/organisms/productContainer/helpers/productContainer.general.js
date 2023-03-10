//action creators
import {
  addItemInCart,
  subtractItemFromCart,
} from "../../../../../../../../../redux/actionCreator";

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
const renderPlusMinusBtnWithQuantities = (vegetable, dispatch) => {
  return (
    <div className="plusMinusBtn">
      <button
        className={"minus minus-" + vegetable.vegetableId}
        onClick={() => dispatch(subtractItemFromCart(vegetable.itemId))}>
        -
      </button>

      <button className={"count count-" + vegetable.vegetableId}>
        {vegetable.quantity}
      </button>

      <button
        className={"plus plus-" + vegetable.vegetableId}
        onClick={() => dispatch(addItemInCart(vegetable.itemId))}>
        +
      </button>
    </div>
  );
};

export const addProductContainer = (vegetables, dispatch) => {
  return vegetables.map((vegetable) => {
    return (
      <div
        key={vegetable.key}
        id={vegetable.vegetableId}
        className={"productProperty " + vegetable.visibility}>
        <div className="productOffer">{vegetable.offer}</div>
        <div className="productImage">
          <img src={vegetable.imgSrc} alt="vegetable" />
        </div>
        <div className="productSource">
          <img
            src="https://cdn.grofers.com/assets/ui/fresh_icon.png"
            alt="Source"
            className="source"
          />
          Sourced at {vegetable.source}
        </div>

        <div className="productContainerName">
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
