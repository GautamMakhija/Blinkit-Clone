import React, { Component } from "react";

//helper function
import { addOption } from "./helpers/selectInput.general";

//action creator
import { handleFilterEvent } from "../../redux/actionCreator";

import { connect } from "react-redux";

export class SelectInput extends Component {
  render() {
    const { name, id, values, dispatch ,filterValue} = this.props;
    return (
      <select
        name={name}
        id={id}
        onChange={(event) => dispatch(handleFilterEvent(event))}>
        {values.map(addOption(filterValue))}
      </select>
    );
  }
}
SelectInput.defaultProps = {
  dispatch: () => {},
};

const mapStateToProps = (state) => {
  return {
    filterValue: state.filterValue,
  };
};

export default connect(mapStateToProps)(SelectInput);
