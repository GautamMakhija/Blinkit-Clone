export const addItemInCart = (index, thisObj, vegetables, selectedItem) => {
  vegetables[index].quantity = vegetables[index]?.quantity + 1;
  selectedItem.count += 1;
  selectedItem.amount += vegetables[index]?.currentPrice;
  selectedItem.oldAmount += vegetables[index]?.oldPrice;
  thisObj.setState({
    vegetables: vegetables,
    selectedItem: selectedItem,
  });
};

export const subtractItemFromCart = (
  index,
  thisObj,
  vegetables,
  selectedItem
) => {
  vegetables[index].quantity = vegetables[index]?.quantity - 1;
  selectedItem.count -= 1;
  selectedItem.amount -= vegetables[index]?.currentPrice;
  selectedItem.oldAmount -= vegetables[index]?.oldPrice;
  thisObj.setState({
    vegetables: vegetables,
    selectedItem: selectedItem,
  });
};

export const renderPlusMinusBtnWithQuantities = (
  vegetable,
  parentThisObj,
  vegetables,
  selectedItem
) => {
  return (
    <div className="plusMinusBtnWithQuantites">
      <button
        className="minusBtn"
        id={"minus-" + vegetable.vegetableId}
        onClick={() =>
          subtractItemFromCart(
            vegetable.itemId,
            parentThisObj,
            vegetables,
            selectedItem
          )
        }>
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
    </div>
  );
};

export const redirectToHomePage = (isHomePage, thisObj) => {
  isHomePage = true;
  thisObj.setState({
    isHomePage,
  });
};

export const redirectToCheckoutPage = (isHomePage, thisObj) => {
  isHomePage = false;
  thisObj.setState({
    isHomePage,
  });
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

const filterItems = (targetValue, filterValue) => (item) => {
  if (
    (item.name.toLowerCase().includes(targetValue.toLowerCase()) ||
      targetValue === "") &&
    (filterValue === item.type || filterValue === "Relevance")
  )
    item.visibility = "inline";
  else item.visibility = "none";
};

export const handleSearchEvent = (thisObj, filterValue) => (event) => {
  const vegetables = thisObj?.state.vegetables;
  const targetValue = event.target.value;
  const result = vegetables.filter(filterItems(targetValue, filterValue));

  thisObj.setState({
    vegetables,
  });
};

