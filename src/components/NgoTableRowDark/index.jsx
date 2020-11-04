import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import NgoDetails from "../NgoDetails";
import NgoDetailsDirection from "../NgoDetailsDirection";

const NgoTableRowDark = ({
  id,
  image,
  name,
  service,
  city,
  rating,
  details,
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
      <tr className="table-info" key={id}>
        <td className="d-table-cell align-middle">
          <img src={image} alt="NGO Logo" className="ngoLogo" align="right" />
        </td>
        <td className="d-table-cell align-middle">{name}</td>
        <td className="d-table-cell align-middle">{service}</td>
        <td className="d-table-cell align-middle">{city}</td>
        <td className="d-table-cell align-middle">{rating}</td>
        <td className="d-table-cell align-middle btnCol">
          <Button
            className="btnMoreDetails shadow-none"
            onClick={() => setOpenDetails(!openDetails)}
            aria-controls={`${id}`}
          >
            Details
          </Button>
        </td>
      </tr>
      {openDetails ? (
        <tr className="table-info">
          <td>&nbsp;</td>
          <td className="ngoDetails" id={`${id}`} colSpan="3">
            <NgoDetails details={details} />
          </td>
          <td colSpan="2">
            <NgoDetailsDirection address={details.address} />
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default NgoTableRowDark;
