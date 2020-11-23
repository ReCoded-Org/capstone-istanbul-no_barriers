import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import hero from "./hero.png";
import "./index.css";
import { wordsSearchedAction } from "../../redux/action/index";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  const [input, setInput] = useState("");

  // when it is triggered it set the searchedWords state and it redirects us to the resources page
  const handleFindNowButton = () => {
    dispatch(wordsSearchedAction(input));
    history.push("/findngos");
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="mt-5 mb-1 header">
          <h1 className="title">{t("homePage.header.title")}</h1>
          <h5 className="subTitle">{t("homePage.header.subtitle")}</h5>
        </Col>
      </Row>
      <Row className="searchers mt-5 d-flex justify-content-around">
        <Col xs={8} md={6}>
          <input
            className="form-control"
            type="text"
            placeholder={t("homePage.header.inputSearch")}
            aria-label="search"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Col>
      </Row>
      <Row className="headerImage mt-4 d-flex justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <button
            className="headerImageBtn"
            type="button"
            onClick={handleFindNowButton}
          >
            {t("homePage.header.button")}
          </button>
        </Col>
        <img src={hero} alt="hero" width="80%" className="img-fluid" />
      </Row>
    </Container>
  );
};

export default Header;
