import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.css";

const SingleFeature = (props) => {
  return (
    <Row className="featContainer justify-content-center align-items-center">
      <Col lg={{ order: props.order }}>
        <img
          className="featuresImg img-fluid"
          src={props.src}
          style={props.styling}
          alt={props.alt}
        />
      </Col>
      <Col className="featText" lg="6">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </Col>
    </Row>
  );
};

export default SingleFeature;
