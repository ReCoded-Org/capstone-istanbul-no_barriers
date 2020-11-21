import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./index.css";
import SingleCategory from "../SingleCategory/index";
import categories from "./categories";
import { useTranslation } from "react-i18next";

const BrowseCategory = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => {
    history.push("/findngos");
  };

  return (
    <div className="browseByCategory">
      <Container className="pb-5">
        <Row>
          <Col xs={12} className="browserTitle mb-5">
            {t("homePage.browser.title")}
          </Col>
        </Row>
        <Row xs={12} md={6} className="d-flex justify-content-center">
          {categories.map((category) => (
            <SingleCategory
              icon={category.icon}
              title={category.title}
              key={category.id}
            />
          ))}
        </Row>
        <Button
          variant="normal"
          className="more shadow-none mt-3"
          onClick={handleClick}
        >
          {t("homePage.browser.more")}
        </Button>
      </Container>
    </div>
  );
};

export default BrowseCategory;
