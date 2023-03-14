import React, { Component } from "react";

//constants
import { SPECIALITIES_DATA } from "./constants/specialities.specialitiesData";

//helpers
import { makeSpecialityContainer } from "./helpers/specialities.general";

//CSS
import "./specialities.scss";

export class Specialities extends Component {
  constructor(props) {
    super(props);
    this.specialitiesContainer = SPECIALITIES_DATA.map(makeSpecialityContainer);
  }
  render() {
    return <div className="speciality">{this.specialitiesContainer}</div>;
  }
}

export default Specialities;
