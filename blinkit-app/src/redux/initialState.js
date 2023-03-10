import { VEGETABLES, SELECTED_ITEM } from "../constants/app.vegetableData";

export const INITIAL_STATE = {
  vegetables: VEGETABLES,
  selectedItem: SELECTED_ITEM,
  filterValue: "Relevance",
  searchValue: "",
  isHomePage: true,
};
