//action creators
import {
  addItemInCart,
  subtractItemFromCart,
  deleteItemFromCart,
} from "../../../../../../../redux/actionCreator";

export const renderPlusMinusBtnWithQuantities = (vegetable, dispatch) => {
  return (
    <>
      <button
        className="minusBtn"
        id={"minus-" + vegetable.vegetableId}
        onClick={() => dispatch(subtractItemFromCart(vegetable.itemId))}>
        -
      </button>

      <button
        className="selectedVegetableCount"
        id={"count-" + vegetable.vegetableId}>
        {vegetable.quantity}
      </button>

      <button
        className="plusBtn"
        id={"plus-" + vegetable.vegetableId}
        onClick={() => dispatch(addItemInCart(vegetable.itemId))}>
        +
      </button>

      <button
        className="crossBtn"
        id={"cross-" + vegetable.vegetableId}
        onClick={() => dispatch(deleteItemFromCart(vegetable.itemId))}>
        x
      </button>
    </>
  );
};

export const addProductContainer = (vegetables, dispatch) => {
  return vegetables.map((vegetable) => {
    if (vegetable.quantity > 0) {
      return (
        <div
          className={"vegetables " + vegetable.visibility}
          key={vegetable.key}>
          <div className="vegetableImageContainer">
            <img
              src={vegetable.imgSrc}
              alt={vegetable.name}
              className="vegetableImage"
            />
          </div>
          <div className="vegetableContainer">
            <div className="vegetableInfo">
              <div className="vegetableName">
                {vegetable.name}
                <p className="vegetableWeight">{vegetable.weight}</p>
              </div>
              <div className="vegetablePriceContainer">
                <span className="vegetableNewPrice">
                  ₹{vegetable.currentPrice}{" "}
                </span>
                <span className="vegetableOldPrice">₹{vegetable.oldPrice}</span>
              </div>
            </div>
            <div className="btnContainer">
              {renderPlusMinusBtnWithQuantities(vegetable, dispatch)}
            </div>
          </div>
        </div>
      );
    }
  });
};
