import React from "react";
import renderer from "react-test-renderer";
import ExploreBlogs from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<ExploreBlogs />).toJSON();
  expect(tree).toMatchSnapshot();
});
