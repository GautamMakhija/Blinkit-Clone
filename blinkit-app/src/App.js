import React from "react";

//pages
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkoutPage";

//connect state
import { connect } from "react-redux";

class App extends React.Component {
  s;
  render() {
    const { isHomePage } = this.props;
    return (
      <div className="App">{isHomePage ? <HomePage /> : <CheckoutPage />}</div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isHomePage: state.isHomePage,
  };
};
export default connect(mapStateToProps)(App);
