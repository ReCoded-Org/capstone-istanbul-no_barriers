import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import "./index.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  const history = useHistory();
  const [alert, setAlert] = useState(null);

  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var facebookProvider = new firebase.auth.FacebookAuthProvider();

  const handleFacebookLogin = (e) => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(function (result) {
        // var user = result.user;
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
        // var user = result.user;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        e.target.elements[0].value,
        e.target.elements[1].value
      )
      .then((user) => {
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
  const { t } = useTranslation();

  return (
    <div className="container">
      <h4 className="welcomeBack">{t("signIn.welcomeBack")}</h4>
      <p>{t("signIn.signInText")}</p>
      <div>
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
      </div>
      <Form id="signInForm" onSubmit={handleSubmit}>
        <p>{t("signIn.or")}</p>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Control type="email" placeholder={t("signIn.enterEmail")} />
          <Form.Text className="text-muted">{t("signIn.emailMsg")}</Form.Text>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword">
          <Form.Control type="password" placeholder={t("signIn.password")} />
        </Form.Group>
        {alert && (
          <Alert variant={alert.status} key="0">
            {t(alert.message)}
          </Alert>
        )}
        <Button variant="primary" type="submit" className="signInButton">
          {t("signIn.signInBtn")}
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
