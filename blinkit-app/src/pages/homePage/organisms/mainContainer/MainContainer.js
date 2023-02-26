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
