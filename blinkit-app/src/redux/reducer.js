import { produce } from "immer";

//initial state
import { INITIAL_STATE } from "./initialState";

//action types
import * as actions from "./actionType";

//helper function
import {
  filterItems,
  filterSearchItems,
  cleartCart,
} from "./helpers/redux.general";

import { PAGES } from "../constants/app.general";

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

    case actions.REDIRECT_TO_HOME_PAGE:
      return {
        ...state,
        page: PAGES.HomePage,
      };
    case actions.REDIRECT_TO_CHECKOUT_PAGE:
      return produce(state, (draft) => {
        draft.page = PAGES.CheckoutPage;
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
          filterSearchItems(action.payload, draft.filterValue)
        );
        draft.searchValue = action.payload;
      });

    case actions.HANDLE_FILTER_EVENT:
      return produce(state, (draft) => {
        draft.vegetables.filter(filterItems(action.payload, draft.searchValue));
        draft.filterValue = action.payload;
      });

    default:
      return state;
  }
};


