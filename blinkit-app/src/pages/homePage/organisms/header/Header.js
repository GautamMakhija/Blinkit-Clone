import React, { Component } from "react";

//Molecules
import LeftHeaderSection from "./molecules/leftHeaderSection";
import RightHeaderSection from "./molecules/rightHeaderSection";

//Organisms
import SearchBar from "./organisms/searchBar";

//CSS
import "./header.scss";

class Header extends Component {
  render() {
    const { vegetables, selectedItem, filterValue } = this.props.state;
    const parentThisObj = this.props.parentThisObj;
    return (
      <section className="header">
        <LeftHeaderSection />
        <SearchBar parentThisObj={parentThisObj} filterValue={filterValue} />
        <RightHeaderSection selectedItem={selectedItem} />
      </section>
    );
  }
}

export default Header;
