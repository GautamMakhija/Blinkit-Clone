import { VEGETABLES } from "../constants/app.vegetableData";
import { PAGES } from "../constants/app.general";

export const INITIAL_STATE = {
  vegetables: VEGETABLES,
  filterValue: "Relevance",
  searchValue: "",
  page: PAGES.HomePage,
};
