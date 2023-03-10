import React, { Component } from "react";

//helper function
import { addOption } from "./helpers/selectInput.general";

//action creator
import { handleFilterEvent } from "../../redux/actionCreator";

export class SelectInput extends Component {
  render() {
    const { name, id, values, dispatch } = this.props;
    return (
      <select
        name={name}
        id={id}
        onChange={(event) => dispatch(handleFilterEvent(event))}>
        {values.map(addOption)}
      </select>
    );
  }
}
SelectInput.defaultProps = {
  dispatch: () => {},
};

export default SelectInput;
