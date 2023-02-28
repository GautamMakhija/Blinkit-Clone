import React, { Component } from "react";

//Constant
import { DESCRIPTION_ABOUT_BLINKIT } from "../../constants/descriptionAboutBlinkit";

//organisms
import Header from "../../organisms/header";
import MainContainer from "./organisms/mainContainer";

//molecules
import Specialities from "../../molecules/specialities";
import SubHeader from "../../molecules/subHeader";
import Footer from "../../molecules/footer";

//atoms
import AboutBlinkit from "../../atoms/aboutBlinkit";

//CSS
import "./checkoutPage.scss";

class CheckoutPage extends Component {
  render() {
    const { ...state } = this.props.state;
    const parentThisObj = this.props.parentThisObj;
    return (
      <div className="homePage">
        <Header state={state} parentThisObj={parentThisObj} />
        <SubHeader />
        <MainContainer parentThisObj={parentThisObj} state={state} />
        <Specialities />
        <AboutBlinkit description={DESCRIPTION_ABOUT_BLINKIT} />
        <Footer />
      </div>
    );
  }
}

export default CheckoutPage;
