import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";

// Navbar will display different links according to the log status of the user:
//  if user is logged in => Find ngo, stories, about us, profile + only log out button
//  otherwise => Find ngo, stories, about us + buttons for sign in and sign up
const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">{t("homePage.navbar.home")}</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#findNgo">{t("homePage.navbar.ngo")}</Nav.Link>
          <Nav.Link href="#stories">{t("homePage.navbar.stories")}</Nav.Link>
          <Nav.Link href="#aboutUs">{t("homePage.navbar.aboutUs")}</Nav.Link>
          <Nav.Link href="#profile">{t("homePage.navbar.profile")}</Nav.Link>
          <Button variant="outline-info" className="shadow-none">
            {t("homePage.navbar.signIn")}
          </Button>
          <Button variant="outline-info" className="shadow-none mr-1">
            {t("homePage.navbar.signUp")}
          </Button>
          <NavDropdown
            title={t("homePage.navbar.dropdownTitle")}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              {t("homePage.navbar.dropdownEnglish")}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              {t("homePage.navbar.dropdownArabic")}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              {t("homePage.navbar.dropdownTurkish")}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
