import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import Resources from "./containers/Resources";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import AboutUS from "./containers/AboutUS";
import Profile from "./containers/Profile";
import Stories from "./containers/Stories";
import Story from "./containers/Story";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  // just add another object here with the details of your containers to be added to the Routers.
  const ROUTES = [
    { path: "/", name: "homepage", Component: HomePage },
    { path: "/aboutus", name: "aboutus", Component: AboutUs },
    { path: "/aboutus", name: "aboutus", Component: AboutUS },
    { path: "/stories", name: "stories", Component: Stories },
    { path: "/findngos", name: "findngos", Component: Resources },
    { path: "/profile", name: "profile", Component: Profile },
    { path: "/signup", name: "signup", Component: SignUp },
    { path: "/profile", name: "profile", Component: Profile },
    { path: "/signin", name: "signin", Component: SignIn },
  ];

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router className="App">
          <NavBar />
          <Switch>
            {ROUTES.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
            <Route
              exact
              path="/story/:id"
              render={(props) => <Story {...props} />}
            />
          </Switch>
          <Footer />
        </Router>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
