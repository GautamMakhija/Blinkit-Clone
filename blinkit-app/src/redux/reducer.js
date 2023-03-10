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

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_IN_CART:
      return produce(state, (draft) => {
        draft.vegetables[action.payload].quantity += 1;
        draft.selectedItem.count += 1;
        draft.selectedItem.amount +=
          draft.vegetables[action.payload].currentPrice;
        draft.selectedItem.oldAmount +=
          draft.vegetables[action.payload].oldPrice;
      });

    case actions.SUBTRACT_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.vegetables[action.payload].quantity -= 1;
        draft.selectedItem.count -= 1;
        draft.selectedItem.amount -=
          draft.vegetables[action.payload].currentPrice;
        draft.selectedItem.oldAmount -=
          draft.vegetables[action.payload].oldPrice;
      });

    case actions.REDIRECT_TO_HOME_PAGE:
      return {
        ...state,
        isHomePage: true,
      };
    case actions.REDIRECT_TO_CHECKOUT_PAGE:
      return produce(state, (draft) => {
        draft.isHomePage = false;
      });

    case actions.DELETE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.selectedItem.count -= draft.vegetables[action.payload].quantity;
        draft.selectedItem.amount -=
          draft.vegetables[action.payload].currentPrice *
          draft.vegetables[action.payload].quantity;
        draft.selectedItem.oldAmount -=
          draft.vegetables[action.payload].oldPrice *
          draft.vegetables[action.payload].quantity;
        draft.vegetables[action.payload].quantity = 0;
      });

    case actions.HANDLE_CLEAR_CART_BTN:
      return produce(state, (draft) => {
        draft.vegetables.map(cleartCart);
        draft.vegetables[0].quantity = 0;
        draft.selectedItem.count = 0;
        draft.selectedItem.amount = 0;
        draft.selectedItem.oldAmount = 0;
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


