import React from "react";

//connectState
import { connect } from "react-redux";

//constants
import { PAGE_TO_REDIRECT } from "./constants/app.general";

class App extends React.Component {
  render() {
    const { page } = this.props;
    return <div className="App">{PAGE_TO_REDIRECT.get(page)}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
export default connect(mapStateToProps)(App);
