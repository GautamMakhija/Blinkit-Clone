

export const handleFilterEvent = (thisObj) => (event) => {
  const vegetables = thisObj.state.vegetables;
  const filterValue=thisObj.state.filterValue;
  const result = vegetables.filter((item) => {
    if (event.target.value === "Relevance") item.visibility = "inline";
    else if (event.target.value === item.type) item.visibility = "inline";
    else item.visibility = "none";
  });
  thisObj.setState({
    vegeables:vegetables,
    filterValue:event.target.value
  });
};
