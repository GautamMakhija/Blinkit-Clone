import React, { Component } from "react";

// helper function
import { addList } from "./helpers/subHeader.general";

//constant
import {
  FOOD_CATORIES,
  EXTRA_FOOD_CATEGORIES,
} from "./constants/subHeader.foodCategories";

//CSS
import "./subHeader.scss";

class SubHeader extends Component {
  isOrderedList = 0;
  foodCategoryList = addList(
    FOOD_CATORIES,
    this.isOrderedList,
    EXTRA_FOOD_CATEGORIES,
    "foodCategory"
  );
  render() {
    return <section className="subHeader">{this.foodCategoryList}</section>;
  }
}

export default SubHeader;
