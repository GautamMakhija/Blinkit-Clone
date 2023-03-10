import React, { Component } from "react";

//helper function
import { renderOptions } from "./helpers/selectInput.general";

//action creator
import { handleFilterEvent } from "../../redux/actionCreator";

import { connect } from "react-redux";

export class SelectInput extends Component {
  render() {
    const { name, id, values, onChange, defaultValue ,isFirstItemHidden } = this.props;
    const { dispatch ,filterValue} = this.props;
    // return (
    //   <select name={name} id={id} onChange={onChange}>
    //     {renderOptions(values,defaultValue,isFirstItemHidden)}
    return (
      <select
        name={name}
        id={id}
        onChange={(event) => dispatch(handleFilterEvent(event))}>
        {renderOptions(values,defaultValue,isFirstItemHidden)}
      </select>
    );
  }
}
SelectInput.defaultProps = {
  onChange: () => {},
  defaultValue: "select the option",
  isFirstItemHidden:false,
  dispatch: () => {},
};

const mapStateToProps = (state) => {
  return {
    filterValue: state.filterValue,
  };
};

export default connect(mapStateToProps)(SelectInput);
