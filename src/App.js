import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import Resources from "./containers/Resources";
import Footer from "./components/Footer";
import AboutUS from "./containers/AboutUS";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  // just add another object here with the details of your containers to be added to the Routers.
  const ROUTES = [
    { path: "/", name: "homepage", Component: HomePage },
    { path: "/aboutus", name: "aboutus", Component: AboutUS },
    { path: "/findnow", name: "findnow", Component: Resources },
  ];

  return (
    <I18nextProvider i18n={i18n}>
      <Router className="App">
        <NavBar />
        <Switch>
          {ROUTES.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;
