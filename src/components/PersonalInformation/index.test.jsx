import React from "react";
import renderer from "react-test-renderer";
import PersonalInformation from "./index";

it("PersonalInformation renders correctly", () => {
  const tree = renderer.create(<PersonalInformation />).toJSON();
  expect(tree).toMatchSnapshot();
});
