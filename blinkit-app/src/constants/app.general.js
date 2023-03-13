import CheckoutPage from "../pages/checkoutPage";
import HomePage from "../pages/homePage";

export const PAGES = {
  HomePage: "homepage",
  CheckoutPage: "checkoutpage",
};

export const PAGE_TO_REDIRECT = new Map([
  [PAGES.HomePage, <HomePage />],
  [PAGES.CheckoutPage, <CheckoutPage />],
]);
