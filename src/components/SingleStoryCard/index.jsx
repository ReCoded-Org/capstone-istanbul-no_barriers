import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";

const SingleStoryCard = ({ post, order }) => {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-md-center articleContainer">
      <Col lg={{ span: 3, order: order }} className="articleImage">
        <Image
          src={post.jetpack_featured_media_url}
          className="roundImage"
          roundedCircle
        />
      </Col>
      <Col lg="6" className="blogCardBox">
        <h3
          className="articleTitle"
          dangerouslySetInnerHTML={{
            __html: post.title.rendered,
          }}
        ></h3>
        <span
          className="articleBody"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        ></span>
        <NavLink to={`/story/${post.id}`}>
          <button type="button" className="readMoreButton">
            {t("singleStoryCard.continueReading")}
          </button>
        </NavLink>
      </Col>
    </Row>
  );
};

export default SingleStoryCard;
