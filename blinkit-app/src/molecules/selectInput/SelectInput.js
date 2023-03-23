import React from "react";

//helpers
import { renderOptions } from "./helpers/selectInput.general";

//actionCreators
import { handleFilterEvent } from "../../redux/actionCreator";

function SelectInput({
  name,
  id,
  values,
  dispatch,
  defaultValue,
  isFirstItemHidden,
}) {
  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      onChange={(event) => dispatch(handleFilterEvent(event))}>
      {renderOptions(values, defaultValue, isFirstItemHidden)}
    </select>
  );
}
SelectInput.defaultProps = {
  defaultValue: "select the option",
  isFirstItemHidden: false,
  dispatch: () => {},
};

export default SelectInput;
