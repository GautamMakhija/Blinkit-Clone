import React, { Component } from "react";

//helper function
import { handleSearchEvent } from "./helpers/searchBar.general";

class SearchBar extends Component {
  render() {
    const { parentThisObj, filterValue } = this.props;

    return (
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search.."
          className="searchInput"
          onKeyUp={handleSearchEvent(parentThisObj, filterValue)}
        />
      </div>
    );
  }
}

export default SearchBar;
