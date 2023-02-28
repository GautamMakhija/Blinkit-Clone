const clearCart = (vegetable) => {
  vegetable.quantity = 0;
};

export const handleClearCartBtn = (vegetables, thisObj, selectedItem,isHomePage) => {
  vegetables.map(clearCart);
  selectedItem.count = 0;
  selectedItem.amount = 0;
  selectedItem.oldAmount = 0;
  isHomePage=true;
  thisObj.setState({
    vegetables: vegetables,
    selectedItem: selectedItem,
    isHomePage
  });
};
