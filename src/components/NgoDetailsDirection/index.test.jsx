import React from "react";
import renderer from "react-test-renderer";
import NgoDetailsDirection from "./index";

it("NgoDetailsDirection renders correctly", () => {
  const tree = renderer
    .create(<NgoDetailsDirection address="Ankara" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
