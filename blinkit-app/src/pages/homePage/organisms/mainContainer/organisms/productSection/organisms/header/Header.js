import React, { Component } from "react";

//molecules
import SelectInput from "../../../../../../../../molecules/selectInput";

//CSS
import "./header.scss";

//constant
import { FILTER_OPTIONS, HEADER_TEXT } from "./constants/header.general";

import { handleFilterEvent } from "./helpers/header.general";

class Header extends Component {
  render() {
    const parentThisObj = this.props.parentThisObj;
    return (
      <div className="sectionHeader">
        <div className="leftSectionHeader">{this.props.headerText}</div>
        <div className="rightSectionHeader">
          Sort By
          <SelectInput
            name="filteringProducts"
            id="filterProduct"
            values={FILTER_OPTIONS}
            parentThisObj={parentThisObj}
            onChange={handleFilterEvent(parentThisObj)}
          />
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  headerText: HEADER_TEXT,
};

export default Header;
