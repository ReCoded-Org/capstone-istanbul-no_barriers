import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../LocationPin";
import "./index.css";

const NgoDetailsDirection = ({ address }) => {
  const location = {
    address,
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <>
      <h5>Directions</h5>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA_W5FFmcpoLooDBWggCdOaWdD20aacVXk" }}
          defaultCenter={location}
          defaultZoom={8}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default NgoDetailsDirection;
