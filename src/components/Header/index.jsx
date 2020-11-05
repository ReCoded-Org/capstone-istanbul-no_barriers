import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import hero from "./hero.png";
import "./index.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5 mb-1">
          <h1 className="title">{t("homePage.header.title")}</h1>
          <h5 className="subTitle">{t("homePage.header.subtitle")}</h5>
        </Col>
      </Row>
      <Row className="searchers mt-5 d-flex justify-content-around">
        <Col xs={12} md={3} lg={4}>
          <input
            className="form-control"
            type="text"
            placeholder={t("homePage.header.inputLocation")}
            aria-label="Locations"
          />
        </Col>
        <Col xs={12} md={3} lg={4}>
          <input
            className="form-control"
            type="text"
            placeholder={t("homePage.header.inputService")}
            aria-label="Service"
          />
        </Col>
        <Col xs={12} md={3} lg={4}>
          <input
            className="form-control"
            type="text"
            placeholder={t("homePage.header.inputRating")}
            aria-label="Rating"
          />
        </Col>
      </Row>
      <Row className="headerImage mt-4 d-flex justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <button className="headerImageBtn" type="button">
            {t("homePage.header.button")}
          </button>
        </Col>
        <img src={hero} alt="hero" width="80%" />
      </Row>
    </Container>
  );
};

export default Header;
