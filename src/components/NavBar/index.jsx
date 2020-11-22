import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// Navbar will display different links according to the log status of the user:
//  if user is logged in => Find ngo, stories, about us, profile + only log out button
//  otherwise => Find ngo, stories, about us + buttons for sign in and sign up
const NavBar = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar collapseOnSelect="false" expand="lg">
      <NavLink to="/" className="navbar-brand">
        <Navbar.Brand>{t("homePage.navbar.home")}</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/findngos" className="nav-link">
            {t("homePage.navbar.ngo")}
          </NavLink>
          <NavLink to="/stories" className="nav-link">
            {t("homePage.navbar.stories")}
          </NavLink>
          <NavLink to="/aboutUs" className="nav-link">
            {t("homePage.navbar.aboutUs")}
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            {t("homePage.navbar.profile")}
          </NavLink>
          <NavLink to="/signin" className="nav.buttn">
            <Button variant="outline-info" className="shadow-none mr-2 mb-1">
              {t("homePage.navbar.signIn")}
            </Button>
          </NavLink>
          <NavLink to="/signup" className="nav.buttn">
            <Button variant="outline-info" className="shadow-none mr-1">
              {t("homePage.navbar.signUp")}
            </Button>
          </NavLink>
          <NavDropdown
            title={t("homePage.navbar.dropdownTitle")}
            id="basic-nav-dropdown"
            drop="left"
          >
            <NavDropdown.Item onClick={() => changeLanguage("en")}>
              {t("homePage.navbar.dropdownEnglish")}
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("ar")}>
              {t("homePage.navbar.dropdownArabic")}
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("tr")}>
              {t("homePage.navbar.dropdownTurkish")}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
