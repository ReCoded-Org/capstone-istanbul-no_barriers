import React from "react";
import "./index.css";

const NgoDetails = ({ details }) => {
  return <td className="ngoDetailsTableData">{details.facilityName}</td>;
};

export default NgoDetails;
