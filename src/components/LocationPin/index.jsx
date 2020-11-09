import React from "react";
/* import mapMarker from '@iconify-icons/mdi/map-marker'; */
import { Icon } from "@iconify/react";
import "./index.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <Icon icon={mapMarker} color="orange" className="pin-icon" /> */}
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
