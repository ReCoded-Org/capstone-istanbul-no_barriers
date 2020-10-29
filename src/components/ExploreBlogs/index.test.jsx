import React from "react";
import renderer from "react-test-renderer";
import ExploreBlogs from "./index";

it("Explore Blogs renders correctly", () => {
  const tree = renderer.create(<ExploreBlogs />).toJSON();
  expect(tree).toMatchSnapshot();
});
