import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./index.css";

const GetStarted = () => {
  return (
    <Container fluid className="getStarted">
      <Row>
        <Col md="6">
          <h6>Ready to get started?</h6>
          <p>Sign up or contact us</p>
        </Col>
        <Col xs md="1.5">
          <Button className="signUp" variant="primary" size="sm">
            Sign Up
          </Button>
        </Col>
        <Col xs md="1.5">
          <Button className="contactUs" variant="primary" size="sm">
            Contact Us
          </Button>
        </Col>
        <Col xs md="3" />
      </Row>
    </Container>
  );
};

export default GetStarted;
