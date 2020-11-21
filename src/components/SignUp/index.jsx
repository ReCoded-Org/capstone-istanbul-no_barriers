import React, { useState } from "react";
import { Row, Form, Col, Button, Container, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import "./index.css";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlert] = useState(null);
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupInfo.password !== signupInfo.repeatPassword) {
      setAlert({ message: t("signup.alertMsg"), status: "danger" });
      return;
    }
    try {
      const response = await auth.createUserWithEmailAndPassword(
        signupInfo.email,
        signupInfo.password
      );
      response.user.sendEmailVerification();
      response.user.updateProfile({
        displayName: signupInfo.firstName + " " + signupInfo.lastName,
      });
    } catch (error) {
      setAlert({ message: error.message, status: "danger" });
      return;
    }
    setSignupInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
    setAlert({ message: t("signup.alertCmplt"), status: "success" });
    setTimeout(() => setRedirect(true), 1000);
  };

  const handleChange = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  return (
    <Container className="signupContainer">
      <Row className="webLogo justify-content-center">
        <h2>No Barriers</h2>
      </Row>
      <Row className="justify-content-center">
        <h4 className="welcometext">{t("signup.welcomeMsg")}</h4>
      </Row>
      <Row className="justify-content-center">
        <Form onSubmit={handleSignup} className="form">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName" className="mt-3">
              <Form.Control
                required
                type="name"
                placeholder={t("signup.firstName")}
                value={signupInfo.firstName}
                onChange={handleChange("firstName")}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName" className="mt-3">
              <Form.Control
                required
                type="name"
                placeholder={t("signup.lastName")}
                value={signupInfo.lastName}
                onChange={handleChange("lastName")}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail" className="mt-3">
            <Form.Control
              type="email"
              placeholder={t("signup.email")}
              value={signupInfo.email}
              onChange={handleChange("email")}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword" className="mt-3">
              <Form.Control
                required
                type="password"
                placeholder={t("signup.password")}
                value={signupInfo.password}
                onChange={handleChange("password")}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridRepeatPassword"
              className="mt-3"
            >
              <Form.Control
                required
                type="password"
                placeholder={t("signup.repeatPassword")}
                value={signupInfo.repeatPassword}
                onChange={handleChange("repeatPassword")}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Button variant="primary" type="submit" className="signupBtn mt-3">
              {t("signup.signup")}
            </Button>
          </Form.Row>
        </Form>
      </Row>
      <Row className="justify-content-center"></Row>
      {alert && (
        <Alert
          className="mt-3"
          variant={alert.status}
          onClose={() => setAlert(null)}
          dismissible
        >
          <p>{alert.message}</p>
        </Alert>
      )}
      {redirect && <Redirect to="/" />}
      <Row className="justify-content-center">
        <p className="mt-3">
          {t("signup.existingAccount")}
          <a href="/login" className="loginLink">
            {t("signup.login")}
          </a>
        </p>
      </Row>
    </Container>
  );
};

export default SignUp;
