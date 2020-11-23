import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import * as logo1 from "./932761.png";
import * as logo2 from "./932762.png";
import * as logo3 from "./932763.png";
import * as logo4 from "./932764.png";
import * as logo5 from "./932765.png";
import "./index.css";

const TrustedBy = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="trustedBy">
      <h4>{t("homePage.trustedBy")}</h4>
      <br />
      <Row>
        <Col>
          <img src={logo1} alt="logo1" title="logo1" />
        </Col>
        <Col>
          <img src={logo2} alt="logo2" title="logo2" />
        </Col>
        <Col>
          <img src={logo3} alt="logo3" title="logo3" />
        </Col>
        <Col>
          <img src={logo4} alt="logo4" title="logo4" />
        </Col>
        <Col>
          <img src={logo5} alt="logo5" title="logo5" />
        </Col>
      </Row>
    </Container>
  );
};

export default TrustedBy;
