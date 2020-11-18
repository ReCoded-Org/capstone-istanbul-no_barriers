import React from "react";
import renderer from "react-test-renderer";
import TeamMember from "./index";

it("TeamMember renders correctly", () => {
  const tree = renderer
    .create(
      <TeamMember avatar="avatar" name="name" title="title" github="github" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
