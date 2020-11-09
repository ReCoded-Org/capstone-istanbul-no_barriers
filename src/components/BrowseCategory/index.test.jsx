import React from "react";
import renderer from "react-test-renderer";
import categories from "./categories";
import SingleCategory from "../SingleCategory/index";

it("Browser renders correctly", () => {
  const tree = renderer
    .create(
      categories.map((category) => (
        <SingleCategory
          icon={category.icon}
          title={category.title}
          key={category.id}
        />
      ))
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
