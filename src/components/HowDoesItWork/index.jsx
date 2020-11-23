import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NGO from "./NGO.png";
import preference from "./preference.png";
import service from "./service.png";
import "./index.css";

const HowDoesItWork = () => {
  return (
    <Container className="howDoesItWork" fluid>
      <h4>How Does It Work?</h4>
      <br />
      <Row>
        <Col>
          <header>1</header>
          <br />
          <img src={preference} alt="preference" title="preference" />
          <div>Select Your Preference</div>
        </Col>
        <Col>
          <header>2</header>
          <br />
          <img src={service} alt="service" title="service" />
          <div>Choose a Service</div>
        </Col>
        <Col>
          <header>3</header>
          <br />
          <img src={NGO} alt="NGO" title="NGO" />
          <div>Connect with NGO</div>
        </Col>
      </Row>
    </Container>
  );
};

export default HowDoesItWork;
