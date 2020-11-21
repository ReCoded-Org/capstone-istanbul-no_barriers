import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import ExploreBlogs from "./index";

it("Explore Blogs renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <ExploreBlogs />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
