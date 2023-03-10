import React, { Component } from "react";

//molecules
import Sidebar from "./molecules/sidebar";

//Organisms..
import ProductSection from "./organisms/productSection";

//CSS
import "./mainContainer.scss";

class MainContainer extends Component {
  sideBar = (<Sidebar />);
  render() {
    return (
      <section className="homePageMainContainer">
        {this.sideBar}
        <ProductSection/>
      </section>
    );
  }
}

export default MainContainer;
