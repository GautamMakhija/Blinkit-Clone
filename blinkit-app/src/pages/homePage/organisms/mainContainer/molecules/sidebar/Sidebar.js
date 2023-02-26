import React, { Component } from "react";

//CSS
import "./sidebar.scss";

//constants
import { VEGETABLES_IMAGES_INFO } from "./constants/sidebar.general";

//helper function
import { addImgWithNameInSidebar } from "./helpers/sidebar.general";

class Sidebar extends Component {
  sidebarImgs = (
    <div className="sidebar">{VEGETABLES_IMAGES_INFO.map(addImgWithNameInSidebar)}</div>
  );
  render() {
    return this.sidebarImgs;
  }
}

export default Sidebar;
