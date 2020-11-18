import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";

const NgoDetails = ({ details }) => {
  const { t } = useTranslation();

  return (
    <div className="ngoDetailsTableData">
      <h3>{details.facilityName}</h3>
      <p className="address">{details.address}</p>
      <h5>{t("resources.ngoList.ngoDetails.aidDescription")}</h5>
      <p className="ngoDetailsServiceDescription">
        {details.serviceDescription}
      </p>
      <p>
        {t("resources.ngoList.ngoDetails.responsiblePerson")}
        {details.responsiblePerson}
        <br />
        {t("resources.ngoList.ngoDetails.phoneNum")}
        {details.phoneNumber}
        <br />
        {t("resources.ngoList.ngoDetails.email")}
        {details.email}
      </p>
      <div className="d-flex align-items-baseline">
        <p className="moreInfo">{t("resources.ngoList.ngoDetails.moreInfo")}</p>
        <Button
          href={details.website}
          target="blank"
          className="btnWebsite shadow-none"
        >
          {t("resources.ngoList.ngoDetails.website")}
        </Button>
        <Button className="btnAddFavourite shadow-none">
          {t("resources.ngoList.ngoDetails.favourite")}
        </Button>
      </div>
    </div>
  );
};

export default NgoDetails;
