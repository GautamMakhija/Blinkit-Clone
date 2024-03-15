import { addItemInCart, subtractItemFromCart } from "../redux/actionCreator";

const calculateSelectedItemCountAndAmountForEveryItem =
  (selectedItem) => (vegetable) => {
    selectedItem.count = selectedItem?.count + vegetable.quantity;
    selectedItem.amount =
      selectedItem?.amount + vegetable.currentPrice * vegetable.quantity;
    selectedItem.oldAmount =
      selectedItem?.oldAmount + vegetable.oldPrice * vegetable.quantity;
  };

export const calculateTotalSelectedItemCountAndAmount = (vegetables) => {
  const selectedItem = { count: 0, amount: 0, oldAmount: 0 };
  vegetables.map(calculateSelectedItemCountAndAmountForEveryItem(selectedItem));
  return selectedItem;
};

export const renderCartBtn = (selectedItem) => {
  if (selectedItem.count === 0) return <div id="cartItemCount">My Cart</div>;
  else {
    return (
      <div id="cartItemCount">
        {selectedItem.count} items <p>₹{selectedItem.amount}</p>
      </div>
    );
  }
};

export const renderPlusMinusBtnWithQuantities = (vegetable, dispatch) => {
  return (
    <div className="plusMinusBtnWithQuantites">
      <button
        className="minusBtn"
        id={"minus-" + vegetable.vegetableId}
        onClick={() => dispatch(subtractItemFromCart(vegetable.itemId))}>
        -
      </button>
      <span
        className="selectedVegetableCount"
        id={"count-" + vegetable.vegetableId}>
        {vegetable.quantity}
      </span>
      <button
        className="plusBtn"
        id={"plus-" + vegetable.vegetableId}
        onClick={() => dispatch(addItemInCart(vegetable.itemId))}>
        +
      </button>
    </div>
  );
};
