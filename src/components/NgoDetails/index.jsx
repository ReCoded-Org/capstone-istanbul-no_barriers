import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const NgoDetails = ({ details }) => {
  const { t } = useTranslation();
  const initialLanguage = useSelector((state) => state.languageReducer);

  const renderDetails = () => {
    switch (initialLanguage) {
      case "ar":
        return details.serviceDescription.arabic;
      case "tr":
        return details.serviceDescription.turkish;
      default:
        return details.serviceDescription.english;
    }
  };

  return (
    <div className="ngoDetailsTableData">
      <h3>{details.facilityName}</h3>
      <p className="address">{details.address}</p>
      <h5>{t("resources.ngoList.ngoDetails.aidDescription")}</h5>
      <p className="ngoDetailsServiceDescription">{renderDetails()}</p>
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
