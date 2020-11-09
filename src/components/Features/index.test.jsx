import React from "react";
import renderer from "react-test-renderer";
import SingleFeature from "../SingleFeature/index";
import contents from "./contents";

it("Features renders correctly", () => {
  const tree = renderer
    .create(
      contents.map((content, index) => {
        if (index % 2 === 0) {
          return (
            <SingleFeature
              src={content.src}
              title={content.title}
              text={content.text}
              styling={content.styling}
              alt={content.alt}
              key={content.alt}
              order={"first"}
            />
          );
        } else {
          return (
            <SingleFeature
              src={content.src}
              title={content.title}
              text={content.text}
              styling={content.styling}
              alt={content.alt}
              key={content.alt}
              order={"last"}
            />
          );
        }
      })
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
