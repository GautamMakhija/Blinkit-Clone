import React, { Component } from "react";

//constants
import { VEGETABLES_IMAGES_INFO } from "./constants/sidebar.general";

//helpers
import { renderImgsWithNameInSidebar } from "./helpers/sidebar.general";

//CSS
import "./sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.sideBarContainer = (
      <div className="sidebar">
        {VEGETABLES_IMAGES_INFO.map(renderImgsWithNameInSidebar)}
      </div>
    );
  }
  render() {
    return this.sideBarContainer;
  }
}

export default Sidebar;
