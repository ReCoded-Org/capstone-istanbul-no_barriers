import React from "react";
import "./index.css";

const LocationPin = ({ address }) => (
  <div>
    <span className="iconify" data-icon="mdi:map-marker" data-inline="false" />
    <p>{address}</p>
  </div>
);

export default LocationPin;
