import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

it("navbar renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
