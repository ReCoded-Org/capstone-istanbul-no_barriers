import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import NgoDetails from "../NgoDetails";

const NgoTableRowLight = ({
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
      <tr className="table-light" key={id}>
        <td className="d-table-cell align-middle">
          <img src={image} alt="NGO Logo" className="ngoLogo" align="right" />
        </td>
        <td className="d-table-cell align-middle">{name}</td>
        <td className="d-table-cell align-middle">{service}</td>
        <td className="d-table-cell align-middle">{city}</td>
        <td className="d-table-cell align-middle">{rating}</td>
        <td className="d-table-cell align-middle btnCol">
          <Button
            onClick={() => setOpenDetails(!openDetails)}
            aria-controls={`${id}`}
          >
            Details
          </Button>
        </td>
      </tr>
      {openDetails ? (
        <tr className="table-light">
          <td>&nbsp;</td>
          <td className="ngoDetails" id={`${id}`} colSpan="3">
            <NgoDetails details={details} />
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default NgoTableRowLight;
