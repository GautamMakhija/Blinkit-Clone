//helpers
import { renderLeftHeader,renderMiddleHeader,renderRightHeader } from "../helpers/homePage.general";

export const HEADER_CONFIG = {
  className: "mainHeader",
  leftHeaderConfig: {
    className: "leftHeader",
    renderFunction: renderLeftHeader,
  },
  middleHeaderConfig: {
    className: "middleHeader",
    renderFunction: renderMiddleHeader,
  },
  rightHeaderConfig: {
    className: "rightHeader",
    renderFunction: renderRightHeader,
  },
};

export const LOCATIONS = [
  {
    key: "locationTitle",
    name: "Select the location",
  },
  {
    key: "delhi",
    name: "Delhi,India",
  },
  {
    key: "mumbai",
    name: "Mumbai,India",
  },
  {
    key: "banglore",
    name: "Banglore,India",
  },
  {
    key: "ahmedabad",
    name: "Ahmedabad,India",
  },
];

export const DELIVERY_TIME = 10;

export const LOGO_IMG_DETAILS = {
  src: "https://blinkit.com/9f644712ea8611916099.png",
  alt: "logo",
};
