import SelectInput from "../../selectInput";

const addItemInList = ({ name, key }) => {
  return <li key={key} className="categoryList"> {name}</li>;
};

const addItmes = (categories, extraCategories) => {
  return (
    <>
      {categories.map(addItemInList)}
      <li className="categoryList">
        <SelectInput
          name="extraCategories"
          id="extracategories"
          values={extraCategories}
        />
      </li>
    </>
  );
};
const addOrderedList = (categories, extraCategories, className) => {
  return <ol className={className}>{addItmes(categories, extraCategories)}</ol>;
};
const addUnorderedList = (categories, extraCategories, className) => {
  return <ul className={className}>{addItmes(categories, extraCategories)}</ul>;
};

export const addList = (
  categories,
  isOrderedList,
  extraCategories,
  className
) => {
  return (
    <>
      {isOrderedList === 0
        ? addUnorderedList(categories, extraCategories, className)
        : addOrderedList(categories, extraCategories, className)}
    </>
  );
};
