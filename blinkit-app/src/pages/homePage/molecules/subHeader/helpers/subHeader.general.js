//components
import SelectInput from "../../selectInput";

const renderItemInList = ({ name, key }) => {
  return (
    <li key={key} className="categoryList">
      {name}
    </li>
  );
};

const renderItmes = (categories, extraCategories) => {
  return (
    <>
      {categories.map(renderItemInList)}
      <li className="categoryList">
        <SelectInput
          name="extraCategories"
          id="extracategories"
          values={extraCategories}
          isFirstItemHidden={true}
          defaultValue="more"
        />
      </li>
    </>
  );
};
const makeOrderedList = (categories, extraCategories, className) => {
  return (
    <ol className={className}>{renderItmes(categories, extraCategories)}</ol>
  );
};
const makeUnorderedList = (categories, extraCategories, className) => {
  return (
    <ul className={className}>{renderItmes(categories, extraCategories)}</ul>
  );
};

export const makeList = (
  categories,
  isOrderedList,
  extraCategories,
  className
) => {
  return (
    <>
      {isOrderedList === 0
        ? makeUnorderedList(categories, extraCategories, className)
        : makeOrderedList(categories, extraCategories, className)}
    </>
  );
};
