import { DeleteOutlined } from "@ant-design/icons";

//actionCreators
import { deleteItemFromCart } from "../../../../../../../redux/actionCreator";

//helpers
import { renderPlusMinusBtnWithQuantities } from "../../../../../../../helpers/general";

const renderCrossBtn = (vegetable, dispatch) => {
  return (
    <button
      className="crossBtn"
      id={"cross-" + vegetable.vegetableId}
      onClick={() => dispatch(deleteItemFromCart(vegetable.itemId))}>
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

export const renderProductsContainer = (vegetables, dispatch) => {
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
              {renderPlusMinusBtnWithQuantities(vegetable, dispatch)}
              {renderCrossBtn(vegetable, dispatch)}
            </div>
          </div>
        </div>
      );
    }
  });
};
