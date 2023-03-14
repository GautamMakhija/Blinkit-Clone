//components
import SelectInput from "../molecules/selectInput";

//constants
import {
  LOCATIONS,
  DELIVERY_TIME,
  LOGO_IMG_DETAILS,
} from "../constants/homePage.general";


//helper functions for leftHeader

export const renderLeftHeader = () => {
  return (
    <>
      <img
        src={LOGO_IMG_DETAILS.src}
        alt={LOGO_IMG_DETAILS.alt}
        className="blinkitLogo"
      />

      <div className="location">
        <div className="deliveryTime">Delivery in {DELIVERY_TIME} minutes</div>
        <SelectInput
          name="Location"
          id="locationOptions"
          values={LOCATIONS}
          defaultValue="Select the location"
          isFirstItemHidden={true}
        />
      </div>
    </>
  );
};

//helper functions for middleHeader

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

export const renderMiddleHeader = ({ parentThisObj, filterValue }) => {
  return (
    <input
      type="text"
      placeholder="Search.."
      className="searchInput"
      onKeyUp={handleSearchEvent(parentThisObj, filterValue)}
    />
  );
};

//helper functions for rightHeader

const renderCartBtn = (selectedItem) => {
  if (selectedItem.count === 0) return <div id="cartItemCount">My Cart</div>;
  else {
    return (
      <div id="cartItemCount">
        {selectedItem.count} items <p>₹{selectedItem.amount}</p>
      </div>
    );
  }
};

export const renderRightHeader = ({ selectedItem }) => {
  return (
    <>
      <div className="login">Login</div>
      <div>
        <button className="cart">
          <div className="cartLogo">🛒</div>
          {renderCartBtn(selectedItem)}
        </button>
      </div>
    </>
  );
};
