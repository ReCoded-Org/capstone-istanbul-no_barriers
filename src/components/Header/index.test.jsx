import React from "react";
import renderer from "react-test-renderer";
import Header from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

it("Header renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
