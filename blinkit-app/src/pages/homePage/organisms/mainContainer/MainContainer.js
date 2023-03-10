import React, { Component } from "react";

//components
import Sidebar from "./molecules/sidebar";
import ProductSection from "./organisms/productSection";

//CSS
import "./mainContainer.scss";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.sideBar = <Sidebar />;
  }
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
