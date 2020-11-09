import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../LocationPin";
import "./index.css";
import { useTranslation } from "react-i18next";

const NgoDetailsDirection = ({ address }) => {
  const { t } = useTranslation();
  const location = {
    address,
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <>
      <h5>{t("resources.ngoList.ngoDetails.directions")}</h5>
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
