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
        {/* serviceDescription should change according to the language  */}
        {details.serviceDescription.english}
      </p>
      <p>
        {t("resources.ngoList.ngoDetails.responsiblePerson")}
        &nbsp;
        {details.responsiblePerson}
        <br />
        {t("resources.ngoList.ngoDetails.phoneNum")}
        &nbsp;
        {details.phoneNumber}
        <br />
        {t("resources.ngoList.ngoDetails.email")}
        &nbsp;
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
      </div>
    </div>
  );
};

export default NgoDetails;
