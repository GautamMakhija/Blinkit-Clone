import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../organisms/header";
import SubHeader from "../../molecules/subHeader";
import MainContainer from "./organisms/mainContainer";
import Specialities from "../../molecules/specialities";
import Footer from "../../molecules/footer";

//Constants
import { DESCRIPTION_ABOUT_BLINKIT } from "../../constants/descriptionAboutBlinkit";
import { HEADER_CONFIG } from "../../constants/general";

//CSS
import "./homePage.scss";

function HomePage() {
  const vegetables = useSelector((state) => state.vegetables);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectToHomePage = () => {
    navigate("/HomePage");
  };
  const redirectToCheckoutPage = () => {
    navigate("/CheckoutPage");
  };
  return (
    <div className="homePage">
      <Header
        {...{
          vegetables,
          dispatch,
          redirectToHomePage,
          redirectToCheckoutPage,
        }}
        {...HEADER_CONFIG}
      />
      <SubHeader />
      <MainContainer />
      <Specialities />
      <section className="aboutContainer">{DESCRIPTION_ABOUT_BLINKIT}</section>
      <Footer />
    </div>
  );
}

export default HomePage;
