import React from "react";
import "./index.css";

const LocationPin = ({ address }) => (
  <div className="pin">
    <span className="iconify" data-icon="mdi:map-marker" data-inline="false" />
    <p className="pin-address">{address}</p>
  </div>
);

export default LocationPin;
