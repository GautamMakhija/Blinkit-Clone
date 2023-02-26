//helpers
import {
  renderLeftHeader,
  renderRightHeader,
} from "../helpers/productSection.general";

export const HEADER_TEXT = "Buy Fresh Vegetables Online";

export const FILTER_OPTIONS = [
  {
    key: "relevance",
    name: "Relevance",
  },
  {
    key: "vegOnly",
    name: "Veg-Only",
  },
  {
    key: "nonVeg",
    name: "Non-Veg-Only",
  },
];

export const HEADER_CONFIG = {
  className: "sectionHeader",
  leftHeaderConfig: {
    className: "leftHeader",
    renderFunction: renderLeftHeader,
  },
  rightHeaderConfig: {
    className: "rightHeader",
    renderFunction: renderRightHeader,
  },
};
