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

//CSS
import "./checkoutPage.scss";

class CheckoutPage extends Component {
  render() {
    const { ...state } = this.props.state;
    const parentThisObj = this.props.parentThisObj;
    return (
      <div className="checkoutPage">
        <Header {...state} parentThisObj={parentThisObj} {...HEADER_CONFIG} />
        <SubHeader />
        <MainContainer parentThisObj={parentThisObj} state={state} />
        <Specialities />
        <section className="aboutContainer">
          {DESCRIPTION_ABOUT_BLINKIT}
        </section>
        <Footer />
      </div>
    );
  }
}

export default CheckoutPage;
