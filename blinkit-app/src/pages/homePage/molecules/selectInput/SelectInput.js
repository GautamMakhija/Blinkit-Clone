import React, { Component } from "react";

//helper function
import { addOption } from "./helpers/selectInput.general";

export class SelectInput extends Component {
  render() {
    const { name, id, values, onChange } = this.props;
    return (
      <select name={name} id={id} onChange={onChange}>
        {values.map(addOption)}
      </select>
    );
  }
}

export default SelectInput;
