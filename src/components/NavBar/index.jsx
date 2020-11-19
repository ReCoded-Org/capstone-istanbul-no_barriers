import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";

// Navbar will display different links according to the log status of the user:
//  if user is logged in => Find ngo, stories, about us, profile + only log out button
//  otherwise => Find ngo, stories, about us + buttons for sign in and sign up
const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Navbar>
      <NavLink to="/" className="navbar-brand">
        <Navbar.Brand>{t("homePage.navbar.home")}</Navbar.Brand>
      </NavLink>
      <Nav className="ml-auto">
        <NavLink to="/findNgo" className="nav-link">
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
        <Button variant="outline-info" className="shadow-none">
          {t("homePage.navbar.signIn")}
        </Button>
        <NavLink to="/signup" className="nav-link">
          <Button variant="outline-info" className="shadow-none mr-1">
            {t("homePage.navbar.signUp")}
          </Button>
        </NavLink>
        <NavDropdown
          title={t("homePage.navbar.dropdownTitle")}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>
            {t("homePage.navbar.dropdownEnglish")}
          </NavDropdown.Item>
          <NavDropdown.Item>
            {t("homePage.navbar.dropdownArabic")}
          </NavDropdown.Item>
          <NavDropdown.Item>
            {t("homePage.navbar.dropdownTurkish")}
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
