import React, { Component } from "react";

//constants
import {
  FOOD_CATEGORIES,
  EXTRA_FOOD_CATEGORIES,
} from "./constants/subHeader.foodCategories";

// helpers
import { makeList } from "./helpers/subHeader.general";

//CSS
import "./subHeader.scss";

class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.isOrderedList = 0;
    this.foodCategoryList = makeList(
      FOOD_CATEGORIES,
      this.isOrderedList,
      EXTRA_FOOD_CATEGORIES,
      "foodCategory"
    );
  }

  render() {
    return <section className="subHeader">{this.foodCategoryList}</section>;
  }
}

export default SubHeader;
