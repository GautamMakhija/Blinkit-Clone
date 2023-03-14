import SelectInput from "../../../../../../../molecules/selectInput";

import { FILTER_OPTIONS } from "../constants/productSection.general";

//helper function for leftHeader
export const renderLeftHeader = ({headerText}) => {
  return <div className="leftSectionHeader">{headerText}</div>;
};

//helper function for rightHeader

const addDisplayTypeToProduct = (targetValue) => (item) => {
  if (targetValue === "Relevance" || targetValue === item.type)
    item.visibility = "inline";
  else item.visibility = "none";
  return item;
};

export const handleFilterEvent = (thisObj) => (event) => {
  const vegetables = thisObj.state.vegetables;
  const targetValue = event.target.value;
  const result = vegetables.filter(addDisplayTypeToProduct(targetValue));
  thisObj.setState({
    vegeables: vegetables,
    filterValue: targetValue,
  });
};

export const renderRightHeader = ({parentThisObj}) => {
  return (
    <div className="rightSectionHeader">
      Sort By
      <SelectInput
        name="filteringProducts"
        id="filterProduct"
        values={FILTER_OPTIONS}
        parentThisObj={parentThisObj}
        onChange={handleFilterEvent(parentThisObj)}
        defaultValue="Relevance"
        isFirstItemHidden={false}
      />
    </div>
  );
};
