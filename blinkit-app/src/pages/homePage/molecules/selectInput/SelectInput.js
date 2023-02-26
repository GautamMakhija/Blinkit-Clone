import React, { Component } from "react";

//helper function
import { renderOptions } from "./helpers/selectInput.general";

export class SelectInput extends Component {
  render() {
    const { name, id, values, onChange, defaultValue ,isFirstItemHidden } = this.props;
    return (
      <select name={name} id={id} onChange={onChange}>
        {renderOptions(values,defaultValue,isFirstItemHidden)}
      </select>
    );
  }
}
SelectInput.defaultProps = {
  onChange: () => {},
  defaultValue: "select the option",
  isFirstItemHidden:false
};

export default SelectInput;
