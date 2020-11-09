import React from "react";
import renderer from "react-test-renderer";
import FilterOptionsList from "./index";
import filters from "../AdvancedFilters/filters";

it("FilterOptionsList renders correctly", () => {
  const tree = renderer
    .create(filters.map((filter) => <FilterOptionsList filter={filter} />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
