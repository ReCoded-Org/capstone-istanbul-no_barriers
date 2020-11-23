import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Navbar, Nav, Col } from "react-bootstrap";
import "./index.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <Container fluid>
        <Navbar
          variant="dark"
          className="footerNavbar"
          collapseOnSelect="false"
          expand="lg"
        >
          <Navbar.Brand href="/" className="d-flex">
            <h4 className="footerHeading">{t("homePage.footer.brand")}</h4>
            <p className="copyright">
              <span>&#169;</span>
              2020
            </p>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/findngos">{t("homePage.footer.find")}</Nav.Link>
            <Nav.Link href="/stories">{t("homePage.footer.stories")}</Nav.Link>
            <Nav.Link href="/aboutUs">{t("homePage.footer.about")}</Nav.Link>
          </Nav>
        </Navbar>
        <Col className="justify-content-md-left" md={2}>
          <a href="#term" target="blank" className="privacyTerms">
            {t("homePage.footer.term")}
          </a>
        </Col>
      </Container>
    </div>
  );
};

export default Footer;
