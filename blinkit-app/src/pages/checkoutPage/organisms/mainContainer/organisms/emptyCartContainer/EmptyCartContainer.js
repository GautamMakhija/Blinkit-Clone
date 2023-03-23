import React from "react";
import { useNavigate } from "react-router-dom";

//constants
import { EMPTY_CART_IMG_DETAIL } from "./constants/emptyCartContainer.general";

function EmptyCartContainer() {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <img
        src={EMPTY_CART_IMG_DETAIL.src}
        alt={EMPTY_CART_IMG_DETAIL.altName}
      />
      <button
        className="redirectToHomepage"
        onClick={() => navigate("/HomePage")}>
        Homepage
      </button>
    </div>
  );
}

export default EmptyCartContainer;
