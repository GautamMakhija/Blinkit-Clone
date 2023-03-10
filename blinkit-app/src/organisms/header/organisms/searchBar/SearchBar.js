import React, { Component } from "react";

//action Creator
import { handleSearchEvent } from "../../../../redux/actionCreator";

//connect state
import { connect } from "react-redux";

class SearchBar extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search.."
          className="searchInput"
          onKeyUp={(event) => dispatch(handleSearchEvent(event))}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
