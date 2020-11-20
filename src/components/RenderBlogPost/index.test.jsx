import React from "react";
import renderer from "react-test-renderer";
import RenderBlogPost from "./index";
import profilePic from "./profile.jpg";

const postInfo = { image: profilePic, title: "My title", date: "11/11/11" };
it("RenderBlogPost renders correctly", () => {
  const tree = renderer.create(<RenderBlogPost postInfo={postInfo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
