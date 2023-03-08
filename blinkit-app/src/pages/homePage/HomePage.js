import React, { Component } from "react";

//Components
import Header from "../../organisms/header";
import MainContainer from "./organisms/mainContainer";
import SubHeader from "../../molecules/subHeader"
import Specialities from "../../molecules/specialities/Specialities";
import Footer from "../../molecules/footer/Footer";

//Constants
import { VEGETABLES, SELECTED_ITEM } from "../../constants/vegetableData";
import { DESCRIPTION_ABOUT_BLINKIT } from "../../constants/descriptionAboutBlinkit";
import { HEADER_CONFIG } from "../../constants/general";

//CSS
import "./homePage.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegetables: VEGETABLES,
      selectedItem: SELECTED_ITEM,
      filterValue: "Relevance",
    };
  }

  render() {
    return (
      <div className="homePage">
        <Header {...this.state} parentThisObj={this} {...HEADER_CONFIG} />
        <SubHeader />
        <MainContainer parentThisObj={this} state={this.state} />
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
