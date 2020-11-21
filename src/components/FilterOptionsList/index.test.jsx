import React from "react";
import renderer from "react-test-renderer";
import FilterOptionsList from "./index";

const options = { services: ["education"], cities: ["Istanbul", "Ankara"] };
const optionsKeys = Object.keys(options);
it("FilterOptionsList renders correctly", () => {
  const tree = renderer
    .create(
      optionsKeys.map((filterKey) => (
        <FilterOptionsList filter={options[filterKey]} key={filterKey} />
      ))
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
