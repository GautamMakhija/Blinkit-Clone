import React, { Component } from "react";

//helpers
import { renderOptions } from "./helpers/selectInput.general";

//actionCreators
import { handleFilterEvent } from "../../redux/actionCreator";

//connectState
import { connect } from "react-redux";

export class SelectInput extends Component {
  render() {
    const { name, id, values, dispatch, defaultValue, isFirstItemHidden } =
      this.props;
    return (
      <select
        name={name}
        id={id}
        onChange={(event) => dispatch(handleFilterEvent(event))}>
        {renderOptions(values, defaultValue, isFirstItemHidden)}
      </select>
    );
  }
}
SelectInput.defaultProps = {
  defaultValue: "select the option",
  isFirstItemHidden: false,
  dispatch: () => {},
};

const mapStateToProps = (state) => {
  return {
    filterValue: state.filterValue,
  };
};

export default connect(mapStateToProps)(SelectInput);
