import React from "react";
import renderer from "react-test-renderer";
import GetStarted from "./index.jsx";

it("renders GetStarted correctly", () => {
  const tree = renderer.create(<GetStarted />).toJSON();
  expect(tree).toMatchSnapshot();
});
