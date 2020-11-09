import React from "react";
import renderer from "react-test-renderer";
import NgoList from "./index";
import allNgos from "./allNgos";

it("NgoList renders correctly", () => {
  const tree = renderer.create(<NgoList ngos={allNgos} />).toJSON();
  expect(tree).toMatchSnapshot();
});
