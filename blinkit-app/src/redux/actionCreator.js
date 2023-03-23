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

export const fetchProductsDataRequest = () => {
  return {
    type: actions.FETCH_PRODUCTS_DATA_REQUEST,
  };
};

export const fetchProducsDataSuccessfully = (productsArray) => {
  return {
    type: actions.FETCH_PRODUCTS_DATA_SUCCESSFULLY,
    payload: productsArray,
  };
};

export const fetchProductsDataFailed = (error) => {
  return {
    type: actions.FETCH_PRODUCTS_DATA_FAILED,
    payload: error,
  };
};
