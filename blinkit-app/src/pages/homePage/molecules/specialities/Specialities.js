import React, { Component } from "react";

//CSS
import "./specialities.scss";

//constants
import { SPECIALITY_DATA } from "./constants/specialities.specialityData";

//helper functions
import { addSpecialityContainer } from "./helpers/specialities.general";

export class Specialities extends Component {
  specialitiesContainer = SPECIALITY_DATA.map(addSpecialityContainer);
  render() {
    return <div className="speciality">{this.specialitiesContainer}</div>;
  }
}

export default Specialities;
