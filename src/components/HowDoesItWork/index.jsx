import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import NGO from "./NGO.png";
import preference from "./preference.png";
import service from "./service.png";
import "./index.css";

const HowDoesItWork = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="howDoesItWork">
      <h4>{t("homePage.howDoesItWork.title")}</h4>
      <br />
      <Row>
        <Col>
          <header>1</header>
          <br />
          <img src={preference} alt="preference" title="preference" />
          <div>{t("homePage.howDoesItWork.preference")}</div>
        </Col>
        <Col>
          <header>2</header>
          <br />
          <img src={service} alt="service" title="service" />
          <div>{t("homePage.howDoesItWork.service")}</div>
        </Col>
        <Col>
          <header>3</header>
          <br />
          <img src={NGO} alt="NGO" title="NGO" />
          <div>{t("homePage.howDoesItWork.connect")}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default HowDoesItWork;
