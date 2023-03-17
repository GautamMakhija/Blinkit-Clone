//components
import SelectInput from "../../../../../../../molecules/selectInput";

//constants
import { FILTER_OPTIONS } from "../constants/productSection.general";

//helper function for leftHeader

export const renderLeftHeader = ({ headerText }) => {
  return <div className="leftSectionHeader">{headerText}</div>;
};

//helper function for rightHeader

export const renderRightHeader = ({ dispatch }) => {
  return (
    <div className="rightSectionHeader">
      Sort By
      <SelectInput
        name="filteringProducts"
        id="filterProduct"
        values={FILTER_OPTIONS}
        dispatch={dispatch}
        defaultValue="Relevance"
        isFirstItemHidden={false}
      />
    </div>
  );
};
