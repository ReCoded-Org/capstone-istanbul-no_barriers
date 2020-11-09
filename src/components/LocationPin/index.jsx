import React from "react";
import "./index.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <span className="iconify" data-icon="mdi:map-marker" data-inline="false" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
