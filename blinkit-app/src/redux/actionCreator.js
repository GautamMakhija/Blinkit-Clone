import * as actions from "./actionType";

export const addItemInCart = (index) => {
  return {
    type: actions.ADD_ITEM_IN_CART,
    payload: index,
  };
};

export const subtractItemFromCart = (index) => {
  return {
    type: actions.SUBTRACT_ITEM_FROM_CART,
    payload: index,
  };
};

export const deleteItemFromCart = (index) => {
  return {
    type: actions.DELETE_ITEM_FROM_CART,
    payload: index,
  };
};

export const handleClearCartBtn = () => {
  return {
    type: actions.HANDLE_CLEAR_CART_BTN,
  };
};

export const redirectToHomePage = () => {
  return {
    type: actions.REDIRECT_TO_HOME_PAGE,
  };
};

export const redirectToCheckoutPage = () => {
  return {
    type: actions.REDIRECT_TO_CHECKOUT_PAGE,
  };
};

export const handleSearchEvent = (event) => {
  return {
    type: actions.HANDLE_SEARCH_EVENT,
    payload: event.target.value,
  };
};

export const handleFilterEvent = (event) => {
  return {
    type: actions.HANDLE_FILTER_EVENT,
    payload: event.target.value,
  };
};
