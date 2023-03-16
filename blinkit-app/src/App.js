import React from "react";
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkoutPage";

//Constant
import { VEGETABLES, SELECTED_ITEM } from "./constants/app.vegetableData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vegetables: VEGETABLES,
      selectedItem: SELECTED_ITEM,
      filterValue: "Relevance",
      isHomePage: true,
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.isHomePage ? (
          <HomePage state={this.state} parentThisObj={this} />
        ) : (
          <CheckoutPage state={this.state} parentThisObj={this} />
        )}
      </div>
    );
  }
}

export default App;
