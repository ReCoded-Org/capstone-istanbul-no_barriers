import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import "./index.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  const history = useHistory();
  const [alert, setAlert] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const handleFacebookLogin = (e) => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(function (result) {
        setAlert({
          message: "signIn.successMsg",
          status: "success",
        });
        history.push("/");
      })
      .catch(function (error) {
        setAlert({
          message: error.message,
          status: "danger",
        });
      });
  };

  const handleGoogleLogin = (e) => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        setAlert({
          message: "signIn.successMsg",
          status: "success",
        });
        history.push("/");
      })
      .catch(function (error) {
        setAlert({
          message: error.message,
          status: "danger",
        });
      });
  };

  const handleInput = (e) => {
    const value = e.target.value;
    if (e.target.type === "email") {
      setEmail(value);
    } else if (e.target.type === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setAlert({
          message: "signIn.successMsg",
          status: "success",
        });
        history.push("/");
      })
      .catch(function (error) {
        setAlert({
          message: "signIn.errorMsg",
          status: "danger",
        });
      });
  };
  const { t } = useTranslation();

  return (
    <Container className="container justify-content-center">
      <Row className="justify-content-center">
        <h4 className="welcomeBack">{t("signIn.welcomeBack")}</h4>
      </Row>
      <Row className="justify-content-center">
        <p>{t("signIn.signInText")}</p>
      </Row>
      <Row className="justify-content-center">
        <div className="icons">
          <Button
            className="socialIcons"
            onClick={handleGoogleLogin}
            variant="danger"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </Button>
          <Button className="socialIcons" onClick={handleFacebookLogin}>
            <FontAwesomeIcon icon={faFacebook} />
          </Button>
        </div>
      </Row>
      <Form id="signInForm" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="justify-content-center">
          <p>{t("signIn.or")}</p>
        </Form.Group>
        <Form.Group
          as={Row}
          className="justify-content-center"
          controlId="formBasicEmail"
        >
          <Col xs={5}>
            <Form.Control
              onChange={handleInput}
              type="email"
              placeholder={t("signIn.enterEmail")}
            />
            <Form.Text className="text-muted">{t("signIn.emailMsg")}</Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="justify-content-center"
          controlId="formBasicPassword"
        >
          <Col xs={5}>
            <Form.Control
              onChange={handleInput}
              type="password"
              placeholder={t("signIn.password")}
            />
          </Col>
        </Form.Group>
        <Row className="justify-content-center">
          {alert && <Alert variant={alert.status}>{t(alert.message)}</Alert>}
        </Row>
        <Row className="justify-content-center">
          <Button variant="primary" type="submit" className="signInButton">
            {t("signIn.signInBtn")}
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default SignIn;
