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
    const parentThisObj = this.props.parentThisObj;
    const { ...state } = this.props.state;
    return (
      <section className="mainContainer">
        {this.sideBar}
        <ProductSection parentThisObj={parentThisObj} state={state} />
      </section>
    );
  }
}

export default MainContainer;
