import React, { Component } from "react";

//Organisms
import LeftHeaderSection from "./organisms/leftHeaderSection";
import RightHeaderSection from "./organisms/rightHeaderSection";
import SearchBar from "./organisms/searchBar";

//CSS
import "./header.scss";

class Header extends Component {
  render() {
    const { vegetables, selectedItem, filterValue, isHomePage } =
      this.props.state;
    const parentThisObj = this.props.parentThisObj;
    return (
      <section className="header">
        <LeftHeaderSection parentThisObj={parentThisObj} isHomePage={isHomePage}/>
        <SearchBar parentThisObj={parentThisObj} filterValue={filterValue} />
        <RightHeaderSection
          selectedItem={selectedItem}
          isHomePage={isHomePage}
          parentThisObj={parentThisObj}
        />
      </section>
    );
  }
}

export default Header;
