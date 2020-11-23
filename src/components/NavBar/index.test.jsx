import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../../redux/reducers";

import Navbar from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

const store = createStore(
  allReducers,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

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
