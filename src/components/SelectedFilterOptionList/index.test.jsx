import React from "react";
import renderer from "react-test-renderer";
import FilterOptionsList from "./index";

const selectedOptions = ["Ankara", "Istanbul"];

it("SelectedFilterOptionList renders correctly", () => {
  const tree = renderer
    .create(<FilterOptionsList selectedOptions={selectedOptions} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
