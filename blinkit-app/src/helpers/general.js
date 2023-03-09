export const addItemInCart = (index, thisObj, vegetables, selectedItem) => {
  vegetables[index].quantity = vegetables[index].quantity + 1;
  selectedItem.count += 1;
  selectedItem.amount += vegetables[index].currentPrice;
  selectedItem.oldAmount += vegetables[index].oldPrice;
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
  vegetables[index].quantity = vegetables[index].quantity - 1;
  selectedItem.count -= 1;
  selectedItem.amount -= vegetables[index].currentPrice;
  selectedItem.oldAmount -= vegetables[index].oldPrice;
  thisObj.setState({
    vegetables: vegetables,
    selectedItem: selectedItem,
  });
};

export const redirectToHomePage = (isHomePage, thisObj) => {
  isHomePage = true;
  thisObj.setState({
    isHomePage,
  });
};
