import React, { Component } from "react";

//CSS
import "./specialities.scss";

//constants
import { SPECIALITY_DATA } from "./constants/specialities.specialityData";

//helper functions
import { renderSpecialityContainer } from "./helpers/specialities.general";

export class Specialities extends Component {
  specialitiesContainer = SPECIALITY_DATA.map(renderSpecialityContainer);
  render() {
    return <div className="speciality">{this.specialitiesContainer}</div>;
  }
}

export default Specialities;
