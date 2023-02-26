const filterItems = (targetValue, filterValue) => (item) => {
  if (
    (item.name.toLowerCase().includes(targetValue.toLowerCase()) ||
      targetValue === "") &&
    (filterValue === item.type || filterValue === "Relevance")
  )
    item.visibility = "inline";
  else item.visibility = "none";
};

export const handleSearchEvent = (thisObj, filterValue) => (event) => {
  const vegetables = thisObj?.state.vegetables;
  const targetValue = event.target.value;
  const result = vegetables.filter(filterItems(targetValue, filterValue));

  thisObj.setState({
    vegetables,
  });
};
