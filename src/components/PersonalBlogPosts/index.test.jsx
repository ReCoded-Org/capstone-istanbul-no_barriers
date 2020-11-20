import React from "react";
import renderer from "react-test-renderer";
import PersonalBlogPosts from "./index";

it("PersonalBlogPosts renders correctly", () => {
  const tree = renderer.create(<PersonalBlogPosts />).toJSON();
  expect(tree).toMatchSnapshot();
});
