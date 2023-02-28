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

export const gotoCheckoutPage = (isHomePage, thisObj, selectedItem) => {
  if (selectedItem.count > 0) isHomePage = false;
  else
    alert(
      "You haven't add anything in cart, please add atleast 1 item in cart"
    );
  thisObj.setState({
    isHomePage,
  });
};
