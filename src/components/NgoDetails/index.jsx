import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

const NgoDetails = ({ details }) => {
  return (
    <td className="ngoDetailsTableData">
      <h3>{details.facilityName}</h3>
      <p className="address">{details.address}</p>
      <h5>How we can help</h5>
      <p className="ngoDetailsServiceDescription">
        {details.serviceDescription}
      </p>
      <p>
        {`Responsible to talk is ${details.responsiblePerson}`}
        <br />
        {`Phone number: ${details.phoneNumber}`}
        <br />
        {`E-mail: ${details.email}`}
      </p>
      <td className="d-flex align-items-baseline">
        <p className="moreInfo">For more info</p>
        <Button href={details.website} target="blank" className="website">
          Website
        </Button>
        <Button>Add to favourite</Button>
      </td>
    </td>
  );
};

export default NgoDetails;
