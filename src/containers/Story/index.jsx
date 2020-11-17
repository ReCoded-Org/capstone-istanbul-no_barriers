import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./index.css";
import LoadingPage from "../../components/LoadingPage";

const Story = () => {
  const [blog, setBlog] = React.useState();
  let params = useParams();
  const storyID = params.id;

  React.useEffect(() => {
    const _storyURL = `https://public-api.wordpress.com/wp/v2/sites/nobarriers650349093.wordpress.com/posts/${storyID}`;
    const getBlog = async () => {
      const data = await fetch(_storyURL);
      const fetchedStory = await data.json();
      setBlog(fetchedStory);
    };
    getBlog();
  }, [storyID]);

  if (!blog) {
    return <LoadingPage />;
  } else {
    return (
      <Container className="blogContainer">
        <Row>
          <Col>
            <h1
              className="blogTitle"
              dangerouslySetInnerHTML={{
                __html: blog.title.rendered,
              }}
            ></h1>
          </Col>
        </Row>
        <Row className="blogBodyHolder">
          <Image src={blog.jetpack_featured_media_url} className="blogImage" />
          <span
            className="blogBody"
            dangerouslySetInnerHTML={{
              __html: blog.content.rendered,
            }}
          ></span>
        </Row>
      </Container>
    );
  }
};

export default Story;
