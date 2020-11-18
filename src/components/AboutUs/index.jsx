import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MeetTheTeam from "../MeetTheTeam";
import aboutus from "./images/aboutus.png";
import "./index.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <Row>
          <Col className="aboutUs">
            <h3>{t("aboutUs.header")}</h3>
            <p>{t("aboutUs.paragraph")}</p>
          </Col>
          <Col>
            <img src={aboutus} alt="aboutus" title="aboutus" />
          </Col>
        </Row>
      </Container>
      <MeetTheTeam />
    </div>
  );
};

export default AboutUs;
