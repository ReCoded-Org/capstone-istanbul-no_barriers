import React from "react";
import renderer from "react-test-renderer";
import Navbar from "./index";

it("navbar renders correctly", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
