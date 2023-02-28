//components
import SelectInput from "../molecules/selectInput";

//constants
import {
  LOCATIONS,
  DELIVERY_TIME,
  LOGO_IMG_DETAILS,
} from "../constants/general";

//helpers
import { redirectToHomePage,redirectToCheckoutPage,handleSearchEvent,renderCartBtn } from "./general";


//helper functions for leftHeader

export const renderLeftHeader = ({isHomePage,parentThisObj}) => {
  return (
    <>
      <img
        src={LOGO_IMG_DETAILS.src}
        alt={LOGO_IMG_DETAILS.alt}
        className="blinkitLogo"
        onClick={()=>redirectToHomePage(isHomePage, parentThisObj)}
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

export const renderRightHeader = ({ selectedItem,isHomePage,parentThisObj}) => {

  return (
    <>
      <div className="login">Login</div>
      <div>
        <button className="cart" onClick={() =>
              redirectToCheckoutPage(isHomePage, parentThisObj, selectedItem)}>
          <div className="cartLogo">🛒</div>
          {renderCartBtn(selectedItem)}
        </button>
      </div>
    </>
  );
};

