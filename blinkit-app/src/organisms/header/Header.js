import React, { Component } from "react";

//Organisms
import LeftHeaderSection from "./organisms/leftHeaderSection";
import RightHeaderSection from "./organisms/rightHeaderSection";
import SearchBar from "./organisms/searchBar";

//CSS
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <section className="header">
        <LeftHeaderSection />
        <SearchBar />
        <RightHeaderSection />
      </section>
    );
  }
}

export default Header;
