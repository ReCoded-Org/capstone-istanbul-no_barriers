import React from "react";
import "./index.css";
import { Row, Container, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import image from "./images/placeHolderImage.jpg";

// Explore-Blogs section shows the last 3 blog posts in the database.
// If you click on a single blog post, you go to that blog's page
// If you click on show more button, you go to blogs list page

const ExploreBlogs = () => {
  const { t } = useTranslation();

  return (
    <div className="exploreBlogs">
      <Row className="justify-content-center">
        <Container className="exploreBlogs-heading">
          <h3 className="exploreBlogs-heading-title_main">
            {t("homePage.exploreBlogs.exploreBlogs")}
          </h3>
          <p className="exploreBlogs-heading-paragraph">
            {t("homePage.exploreBlogs.paragraph")}
          </p>
        </Container>
      </Row>
      <Container className="exploreBlogs-blog-list">
        <Row className="d-flex">
          <Col xs={12} md={6} lg={4}>
            <div className="exploreBlogs-blog">
              <img
                src={image}
                alt="placeholder"
                className="exploreBlogs-blog-img"
              />
              <h5 className="exploreBlogs-blog-heading">
                {t("homePage.exploreBlogs.blogTitle")}
              </h5>
              <a href="#singleBlog" className="exploreBlogs-blog-link">
                {t("homePage.exploreBlogs.blogLink")}
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="exploreBlogs-blog">
              <img
                src={image}
                alt="placeholder"
                className="exploreBlogs-blog-img"
              />
              <h5 className="exploreBlogs-blog-heading">
                {t("homePage.exploreBlogs.blogTitle")}
              </h5>
              <a href="#singleBlog" className="exploreBlogs-blog-link">
                {t("homePage.exploreBlogs.blogLink")}
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="exploreBlogs-blog">
              <img
                src={image}
                alt="placeholder"
                className="exploreBlogs-blog-img"
              />
              <h5 className="exploreBlogs-blog-heading">
                {t("homePage.exploreBlogs.blogTitle")}
              </h5>
              <a href="#singleBlog" className="exploreBlogs-blog-link">
                {t("homePage.exploreBlogs.blogLink")}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="justify-content-center">
        <Button variant="outline-warning shadow-none">
          {t("homePage.exploreBlogs.buttonSeeMore")}
        </Button>
      </Row>
    </div>
  );
};

export default ExploreBlogs;
