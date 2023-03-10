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
import "./homePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <Header {...state} parentThisObj={parentThisObj} {...HEADER_CONFIG} />
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
