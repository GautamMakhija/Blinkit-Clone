import React, { Component } from "react";

//helper function
import { renderCartBtn } from "./helpers/rightHeaderSection.general";

//CSS
import "./rightHeaderSection.scss";

//action creator
import { redirectToCheckoutPage } from "../../../../redux/actionCreator";

//connect state
import { connect } from "react-redux";

class RightHeaderSection extends Component {
  render() {
    const { vegetables, redirectToCheckoutPage } = this.props;
    return (
      <div className="loginCart">
        <div className="login">Login</div>
        <div>{renderCartBtn(vegetables, redirectToCheckoutPage)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vegetables:state.vegetables
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    redirectToCheckoutPage: () => dispatch(redirectToCheckoutPage()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightHeaderSection);
