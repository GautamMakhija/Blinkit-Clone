const calculateSelectedItemCountAndAmountForEveryItem =
  (selectedItem) => (vegetable) => {
    selectedItem.count = selectedItem?.count + vegetable.quantity;
    selectedItem.amount =
      selectedItem?.amount + vegetable.currentPrice * vegetable.quantity;
    selectedItem.oldAmount =
      selectedItem?.oldAmount + vegetable.oldPrice * vegetable.quantity;
  };

export const calculateTotalSelectedItemCountAndAmount = (
  vegetables,
) => {
  const selectedItem={count:0,amount:0,oldAmount:0}
  vegetables.map(calculateSelectedItemCountAndAmountForEveryItem(selectedItem));
  return selectedItem;
};
