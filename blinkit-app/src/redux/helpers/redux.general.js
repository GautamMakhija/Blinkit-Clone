export const filterSearchItems = (targetValue, filterValue) => (item) => {
  if (
    (item.name.toLowerCase().includes(targetValue.toLowerCase()) ||
      targetValue === "") &&
    (filterValue === item.type || filterValue === "Relevance")
  )
    item.visibility = "inline";
  else item.visibility = "none";
};

export const filterItems = (targetValue, searchValue) => (item) => {
  if (
    (targetValue === "Relevance" || targetValue === item.type) &&
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  )
    item.visibility = "inline";
  else item.visibility = "none";
};

export const cleartCart = (vegetable) => (vegetable.quantity = 0);
