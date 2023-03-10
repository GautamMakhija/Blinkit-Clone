import { calculateTotalSelectedItemCountAndAmount } from "../../../../../helpers/app.general";

const handleOnClickEventForEmptyCart = () => {
  alert("You haven't add anything in cart, please add atleast 1 item in cart");
};

export const renderCartBtn = (vegetables, redirectToCheckoutPage) => {
  const selectedItem =calculateTotalSelectedItemCountAndAmount(vegetables);
  if (selectedItem.count === 0)
    return (
      <button className="cart" onClick={handleOnClickEventForEmptyCart}>
        <div className="cartLogo">🛒</div>
        <div id="cartItemCount">My Cart</div>
      </button>
    );
  else {
    return (
      <button className="cart" onClick={redirectToCheckoutPage}>
        <div className="cartLogo">🛒</div>
        <div id="cartItemCount">
          {selectedItem.count} items <p>₹{selectedItem.amount}</p>
        </div>
      </button>
    );
  }
};
