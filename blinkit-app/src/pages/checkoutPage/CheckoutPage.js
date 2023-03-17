import React, { Component } from "react";

//components
import Header from "../../organisms/header";
import SubHeader from "../../molecules/subHeader";
import MainContainer from "./organisms/mainContainer";
import Specialities from "../../molecules/specialities";
import Footer from "../../molecules/footer";

//Constants
import { DESCRIPTION_ABOUT_BLINKIT } from "../../constants/descriptionAboutBlinkit";
import { HEADER_CONFIG } from "../../constants/general";

//actionCreators
import {
  redirectToHomePage,
  redirectToCheckoutPage,
  handleSearchEvent,
} from "../../redux/actionCreator";

//connectState
import { connect } from "react-redux";

//CSS
import "./checkoutPage.scss";

class CheckoutPage extends Component {
  render() {
    return (
      <div className="checkoutPage">
        <Header {...this.props} {...HEADER_CONFIG} />
        <SubHeader />
        <MainContainer />
        <Specialities />
        <section className="aboutContainer">
          {DESCRIPTION_ABOUT_BLINKIT}
        </section>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    vegetables: state.vegetables,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    redirectToHomePage: () => dispatch(redirectToHomePage()),
    handleSearchEvent: (event) => dispatch(handleSearchEvent(event)),
    redirectToCheckoutPage: () => dispatch(redirectToCheckoutPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
