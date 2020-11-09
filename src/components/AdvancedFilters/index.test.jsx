import React from "react";
import renderer from "react-test-renderer";
import AdvancedFilters from "./index";

it("AdvancedFilters renders correctly", () => {
  const tree = renderer.create(<AdvancedFilters />).toJSON();
  expect(tree).toMatchSnapshot();
});
