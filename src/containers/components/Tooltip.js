import React, { Component } from "react";

export default class Tooltip extends Component {
  render() {
    return (
      <div id="popupCont">
        <div className="mapPopup">
          <span className="weather-icon">
            <img src="./weather-icons/blowing-dirt.svg" alt="" />
          </span>
          <h3>Blowing Sand - 01/01/2018</h3>
          <p className="severity">
            <span className="bold highlight"> Severity: </span> Unknown
          </p>
          <span className="flex row">
            <p>
              <span className="bold"> Injuries: </span> 0
            </p>
            <p>
              <span className="bold"> Fatalities: </span> 1
            </p>
          </span>
          <p className="bold"> Factors:</p>
          <ul>
            <li>Failed To Drive In Single Lane</li>
            <li>Failed To Control Speed.</li>
          </ul>
        </div>
      </div>
    );
  }
}
