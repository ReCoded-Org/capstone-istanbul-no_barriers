import React, { useState } from "react";
import { Row, Col, Button, Collapse } from "react-bootstrap";
import allNgos from "./allNgos";
import "./index.css";
import NgoDetails from "../NgoDetails";

// This renders the NGOs which are filtered or searched
// It renders all NGOs by default if a parameter is not given
const NgoList = ({ ngos = allNgos }) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div>
      <Row className="ngoListTitles d-flex justify-content-around align-items-center">
        <Col>&nbsp;</Col>
        <Col>NGO Name</Col>
        <Col>Service</Col>
        <Col>City</Col>
        <Col>Rating</Col>
        <Col>&nbsp;</Col>
      </Row>
      <div className="tablesBody">
        {ngos.map((ngo, index) => {
          if (index % 2 === 0) {
            return (
              <div className="tableNgoInfo" key={ngo.id}>
                <Row>
                  <Col>
                    <img src={ngo.image} alt="NGO Logo" className="ngoLogo" />
                  </Col>
                  <Col>{ngo.name}</Col>
                  <Col>{ngo.service}</Col>
                  <Col>{ngo.city}</Col>
                  <Col>{ngo.rating}</Col>
                  <Col>
                    <Button
                      onClick={() => setOpenDetails(!openDetails)}
                      aria-expanded={openDetails}
                      aria-controls={`${ngo.id}`}
                    >
                      Details
                    </Button>
                  </Col>
                </Row>
                <Collapse in={openDetails}>
                  <Row
                    className="ngoDetails d-flex justify-content-around"
                    id={`${ngo.id}`}
                  >
                    <Col md={6}>
                      <NgoDetails details={ngo.details} />
                    </Col>
                  </Row>
                </Collapse>
              </div>
            );
          }
          return (
            <div className="tableNgoInfo" key={ngo.id}>
              <Row>
                <Col>
                  <img src={ngo.image} alt="NGO Logo" className="ngoLogo" />
                </Col>
                <Col>{ngo.name}</Col>
                <Col>{ngo.service}</Col>
                <Col>{ngo.city}</Col>
                <Col>{ngo.rating}</Col>
                <Col>
                  <Button
                    onClick={() => setOpenDetails(!openDetails)}
                    aria-expanded={openDetails}
                    aria-controls={`${ngo.id}`}
                  >
                    Details
                  </Button>
                </Col>
              </Row>
              <Collapse in={openDetails}>
                <Row
                  className="ngoDetails d-flex justify-content-around"
                  id={`${ngo.id}`}
                >
                  <Col md={6}>
                    <NgoDetails details={ngo.details} />
                  </Col>
                </Row>
              </Collapse>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NgoList;
