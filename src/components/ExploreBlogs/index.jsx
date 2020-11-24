import React from "react";
import "./index.css";
import { Row, Container, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";

// Explore-Blogs section shows the last 3 blog posts in the database.
// If you click on a single blog post, you go to that blog's page
// If you click on show more button, you go to blogs list page
const ExploreBlogs = () => {
  const { t } = useTranslation();
  const ENGLISH_LANGUAGE = "10221";
  const AR_LANGUAGE = "38299";
  const TR_LANGUAGE = "64053";
  const [langRef, setLangRef] = React.useState(ENGLISH_LANGUAGE);
  const [posts, setPosts] = React.useState([]);
  const _URL =
    "https://public-api.wordpress.com/wp/v2/sites/nobarriers650349093.wordpress.com/posts";
  const _startNum = 0;
  const _endNum = 3;

  React.useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(_URL);
      const fetchedPosts = await data.json();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  i18next.on("languageChanged", (lng) => {
    let ref = i18next.translator.language;
    if (ref === "en") {
      setLangRef(ENGLISH_LANGUAGE);
    } else if (ref === "ar") {
      setLangRef(AR_LANGUAGE);
    } else if (ref === "tr") {
      setLangRef(TR_LANGUAGE);
    }
  });

  return (
    <div className="exploreBlogs">
      <Container>
        <Row className="exploreBlogsHeadingTitleMain justify-content-center">
          <Col md="auto">
            <h4>{t("homePage.exploreBlogs.exploreBlogs")}</h4>
          </Col>
        </Row>
        <Row className="exploreBlogsHeadingParagraph justify-content-center">
          <Col>
            <p>{t("homePage.exploreBlogs.paragraph")}</p>
          </Col>
        </Row>
      </Container>
      <Container className="exploreBlogsBlogList">
        <Row className="justify-content-center">
          {posts
            .filter((post) => post.tags.toString() === langRef)
            .slice(_startNum, _endNum)
            .map((post) => {
              return (
                <Col xs={12} md={6} lg={3} className="exploreBlogsBlog">
                  <Link to={`/story/${post.id}`}>
                    <img
                      src={post.jetpack_featured_media_url}
                      alt="placeholder"
                      className="exploreBlogsBlogImg"
                    />
                    <h5
                      className="exploreBlogsBlogHeading"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    ></h5>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
      <Row className="justify-content-center">
        <Link to={`/stories`}>
          <Button variant="outline-warning shadow-none">
            {t("homePage.exploreBlogs.buttonSeeMore")}
          </Button>
        </Link>
      </Row>
    </div>
  );
};

export default ExploreBlogs;
