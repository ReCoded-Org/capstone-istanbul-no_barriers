import React from "react";
import renderer from "react-test-renderer";
import HowDoesItWork from "./index.jsx";

it("renders HowDoesItWork correctly", () => {
  const tree = renderer.create(<HowDoesItWork />).toJSON();
  expect(tree).toMatchSnapshot();
});
