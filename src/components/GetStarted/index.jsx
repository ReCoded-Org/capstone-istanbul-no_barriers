import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./index.css";

const GetStarted = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleSignUp = () => history.push("/signup");

  return (
    <Container fluid className="getStarted">
      <Row>
        <Col md="6">
          <h6>{t("homePage.getStarted.ready")}</h6>
          <p>{t("homePage.getStarted.parag")}</p>
        </Col>
        <Col xs md="1.5">
          <Button
            className="signUp"
            variant="primary"
            size="sm"
            onClick={handleSignUp}
          >
            {t("homePage.getStarted.signUp")}
          </Button>
        </Col>
        <Col xs md="1.5">
          <Button className="contactUs" variant="primary" size="sm">
            {t("homePage.getStarted.contactUs")}
          </Button>
        </Col>
        <Col xs md="3" />
      </Row>
    </Container>
  );
};

export default GetStarted;
