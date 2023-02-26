export const displayCartContent = (selectedItem) => {
  if (selectedItem.count === 0) return <div id="cartItemCount">My Cart</div>;
  else {
    return (
      <div id="cartItemCount">
        {selectedItem.count} items <p>₹{selectedItem.amount}</p>
      </div>
    );
  }
};
