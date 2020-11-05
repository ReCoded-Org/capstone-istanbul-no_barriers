import React from "react";
import renderer from "react-test-renderer";
import TrustedBy from "./index.jsx";

it("renders TrustedBy correctly", () => {
  const tree = renderer.create(<TrustedBy />).toJSON();
  expect(tree).toMatchSnapshot();
});
