import React, { Component } from "react";

//Constant
import { VEGETABLES, SELECTED_ITEM } from "./constants/homePage.vegetableData";
import { DESCRIPTION_ABOUT_BLINKIT } from "./constants/homePage.descriptionAboutBlinkit";
import { BLINKIT_INFO } from "./molecules/footer/constants/footer.general";

//organisms
import Header from "./organisms/header";
import MainContainer from "./organisms/mainContainer";

//molecules
import SubHeader from "./molecules/subHeader";
import Specialities from "./molecules/specialities";
import Footer from "./molecules/footer";

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
        <Header state={this.state} parentThisObj={this} />
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
