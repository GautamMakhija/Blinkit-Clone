import React, { Component } from "react";

//molecules
import SelectInput from "../../../../../../../../molecules/selectInput";

//CSS
import "./header.scss";

//constant
import { FILTER_OPTIONS, HEADER_TEXT } from "./constants/header.general";

//connect state
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="sectionHeader">
        <div className="leftSectionHeader">{this.props.headerText}</div>
        <div className="rightSectionHeader">
          Sort By
          <SelectInput
            name="filteringProducts"
            id="filterProduct"
            values={FILTER_OPTIONS}
            dispatch={dispatch}
          />
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  headerText: HEADER_TEXT,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(null, mapDispatchToProps)(Header);
