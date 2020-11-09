import React from "react";
import renderer from "react-test-renderer";
import LocationPin from "./index";

it("LocationPin renders correctly", () => {
  const tree = renderer.create(<LocationPin address="Ankara" />).toJSON();
  expect(tree).toMatchSnapshot();
});
