import React from "react";

//pages
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkoutPage";

//connect state
import { connect } from "react-redux";

import { PAGE_TO_REDIRECT } from "./constants/app.general";

class App extends React.Component {
  s;
  render() {
    const { page } = this.props;
    return <div className="App">{PAGE_TO_REDIRECT.get(page)}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
export default connect(mapStateToProps)(App);
