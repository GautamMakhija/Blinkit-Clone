import React, { Component } from "react";

//Constant
import { DESCRIPTION_ABOUT_BLINKIT } from "../../constants/homePage.descriptionAboutBlinkit";

//organisms
import Header from "../../organisms/header";
import MainContainer from "./organisms/mainContainer";

//molecules
import SubHeader from "../../molecules/subHeader";
import Specialities from "../../molecules/specialities";
import Footer from "../../molecules/footer";

//CSS
import "./homePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
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

export default HomePage;
