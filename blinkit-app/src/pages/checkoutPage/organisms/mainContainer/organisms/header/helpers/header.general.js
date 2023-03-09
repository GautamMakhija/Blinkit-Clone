const clearCart = (vegetable) => {
  vegetable.quantity = 0;
};

export const handleClearCartBtn = (vegetables, thisObj, selectedItem) => {
  vegetables.map(clearCart);
  selectedItem.count = 0;
  selectedItem.amount = 0;
  selectedItem.oldAmount = 0;
  thisObj.setState({
    vegetables: vegetables,
    selectedItem: selectedItem,
  });
};
