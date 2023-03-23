import { produce } from "immer";

//initial state
import { INITIAL_STATE } from "./initialState";

//action types
import * as actions from "./actionType";

//helpers
import {
  addDisplayTypeToFilterProducts,
  addDisplayTypeToSearchProducts,
  cleartCart,
} from "./helpers/redux.general";

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_IN_CART:
      return produce(state, (draft) => {
        draft.vegetables[action.payload].quantity += 1;
      });

    case actions.SUBTRACT_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.vegetables[action.payload].quantity -= 1;
      });
    case actions.DELETE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.vegetables[action.payload].quantity = 0;
      });

    case actions.HANDLE_CLEAR_CART_BTN:
      return produce(state, (draft) => {
        draft.vegetables.map(cleartCart);
      });

    case actions.HANDLE_SEARCH_EVENT:
      return produce(state, (draft) => {
        draft.vegetables.filter(
          addDisplayTypeToSearchProducts(action.payload, draft.filterValue)
        );
        draft.searchValue = action.payload;
      });

    case actions.HANDLE_FILTER_EVENT:
      return produce(state, (draft) => {
        draft.vegetables.filter(
          addDisplayTypeToFilterProducts(action.payload, draft.searchValue)
        );
        draft.filterValue = action.payload;
      });
    case actions.FETCH_PRODUCTS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_PRODUCTS_DATA_SUCCESSFULLY:
      return {
        ...state,
        vegetables: action.payload,
        isLoading: false,
      };
    case actions.FETCH_PRODUCTS_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
