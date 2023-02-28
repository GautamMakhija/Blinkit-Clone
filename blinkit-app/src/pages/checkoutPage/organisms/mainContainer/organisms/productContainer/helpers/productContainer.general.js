import { DeleteOutlined } from "@ant-design/icons";

import { renderPlusMinusBtnWithQuantities } from "../../../../../../../helpers/general";

export const deleteItemFromCart = (
  index,
  thisObj,
  vegetables,
  selectedItem
) => {
  selectedItem.count -= vegetables[index].quantity;
  selectedItem.amount -=
    vegetables[index].currentPrice * vegetables[index].quantity;
  selectedItem.oldAmount -=
    vegetables[index].oldPrice * vegetables[index].quantity;
  vegetables[index].quantity = 0;
  thisObj.setState({
    vegetables: vegetables,
    selectedItem: selectedItem,
  });
};

const renderCrossBtn = (vegetable, parentThisObj, vegetables, selectedItem) => {
  return (
    <button
      className="crossBtn"
      id={"cross-" + vegetable.vegetableId}
      onClick={() => {
        deleteItemFromCart(
          vegetable.itemId,
          parentThisObj,
          vegetables,
          selectedItem
        );
      }}>
      <DeleteOutlined />
    </button>
  );
};

const rendervegetableImageContainer = (vegetable) => {
  return (
    <div className="vegetableImageContainer">
      <img
        src={vegetable.imgSrc}
        alt={vegetable.name}
        className="vegetableImage"
      />
    </div>
  );
};

const rendervegetableInfo = (vegetable) => {
  return (
    <div className="vegetableInfo">
      <div className="vegetableName">
        {vegetable.name}
        <p className="vegetableWeight">{vegetable.weight}</p>
      </div>
      <div className="vegetablePriceContainer">
        <span className="vegetableNewPrice">₹{vegetable.currentPrice} </span>
        <span className="vegetableOldPrice">₹{vegetable.oldPrice}</span>
      </div>
    </div>
  );
};

export const renderProductsContainer = (
  vegetables,
  parentThisObj,
  selectedItem
) => {
  return vegetables.map((vegetable) => {
    if (vegetable.quantity > 0) {
      return (
        <div
          className={"vegetableContainer " + vegetable.visibility}
          key={vegetable.key}>
          {rendervegetableImageContainer(vegetable)}
          <div className="vegetableInfoContainer">
            {rendervegetableInfo(vegetable)}
            <div className="btnContainer">
              {renderPlusMinusBtnWithQuantities(
                vegetable,
                parentThisObj,
                vegetables,
                selectedItem
              )}
              {renderCrossBtn(
                vegetable,
                parentThisObj,
                vegetables,
                selectedItem
              )}
            </div>
          </div>
        </div>
      );
    }
  });
};
