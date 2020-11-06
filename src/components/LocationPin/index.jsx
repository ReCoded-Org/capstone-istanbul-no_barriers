import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import "./index.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} color="orange" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
