import {
  addItemInCart,
  subtractItemFromCart,
} from "../../../../../../../helpers/general";

export const deleteItemFromCart = (
  index,
  thisObj,
  vegetables,
  selectedItem,
  isHomePage
) => {
  selectedItem.count -= vegetables[index].quantity;
  selectedItem.amount -=
    vegetables[index].currentPrice * vegetables[index].quantity;
  selectedItem.oldAmount -=
    vegetables[index].oldPrice * vegetables[index].quantity;
  vegetables[index].quantity = 0;
  if (selectedItem.count === 0) {
    isHomePage = true;
  }
  thisObj.setState({
    vegetables: vegetables,
    selectedItem: selectedItem,
    isHomePage,
  });
};

export const renderPlusMinusBtnWithQuantities = (
  vegetable,
  parentThisObj,
  vegetables,
  selectedItem,
  isHomePage
) => {
  return (
    <>
      <button
        className="minusBtn"
        id={"minus-" + vegetable.vegetableId}
        onClick={() =>
          subtractItemFromCart(
            vegetable.itemId,
            parentThisObj,
            vegetables,
            selectedItem,
            isHomePage
          )
        }>
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
        onClick={() =>
          addItemInCart(
            vegetable.itemId,
            parentThisObj,
            vegetables,
            selectedItem
          )
        }>
        +
      </button>
      <button
        className="crossBtn"
        id={"cross-" + vegetable.vegetableId}
        onClick={() => {
          deleteItemFromCart(
            vegetable.itemId,
            parentThisObj,
            vegetables,
            selectedItem,
            isHomePage
          );
        }}>
        x
      </button>
    </>
  );
};

export const addProductContainer = (
  vegetables,
  parentThisObj,
  selectedItem,
  isHomePage
) => {
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
              {renderPlusMinusBtnWithQuantities(
                vegetable,
                parentThisObj,
                vegetables,
                selectedItem,
                isHomePage
              )}
            </div>
          </div>
        </div>
      );
    }
  });
};
