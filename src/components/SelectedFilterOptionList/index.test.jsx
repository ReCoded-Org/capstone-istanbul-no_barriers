import React from "react";
import renderer from "react-test-renderer";
import FilterOptionsList from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

const selectedOptions = ["Ankara", "Istanbul"];

it("SelectedFilterOptionList renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <FilterOptionsList selectedOptions={selectedOptions} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
