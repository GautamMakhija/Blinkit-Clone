import React, { Component } from "react";

//CSS
import "./specialities.scss";

//constants
import { SPECIALITY_DATA } from "./constants/specialities.specialityData";

//helper functions
import { addSpecialityContainer } from "./helpers/specialities.general";

export class Specialities extends Component {
  render() {
    return (
      <div className="speciality">
        {SPECIALITY_DATA.map(addSpecialityContainer)}
      </div>
    );
  }
}

export default Specialities;
