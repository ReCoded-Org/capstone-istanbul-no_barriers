import React from "react";
import { Col } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";

const SingleCategory = ({ icon, title }) => {
  const { t } = useTranslation();

  return (
    <Col className="categoryComponent">
      <img src={icon} alt="category icon" className="catogoryIcon" />
      <p className="iconTitle">{t(title)}</p>
    </Col>
  );
};

export default SingleCategory;
