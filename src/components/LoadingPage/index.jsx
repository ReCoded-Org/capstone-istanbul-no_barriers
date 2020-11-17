import React from "react";
import { Row, Container, Image } from "react-bootstrap";
import "./index.css";
import loadingGif from "../../images/loading.gif";

const LoadingPage = () => {
  return (
    <Container className="loadContainer">
      <Row>
        <Image src={loadingGif} className="loadingGif"></Image>
      </Row>
    </Container>
  );
};

export default LoadingPage;
