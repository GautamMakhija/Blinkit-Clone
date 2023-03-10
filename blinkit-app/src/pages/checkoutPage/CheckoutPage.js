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

//CSS
import "./checkoutPage.scss";

class CheckoutPage extends Component {
  render() {
    return (
      <div className="checkoutPage">
        <Header />
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

export default CheckoutPage;
