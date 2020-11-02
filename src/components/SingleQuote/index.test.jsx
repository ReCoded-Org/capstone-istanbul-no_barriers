import React from "react";
import renderer from "react-test-renderer";
import SingleQuote from "./index";
import people from "../Quotes/people";

it("Single quote renders correctly", () => {
  const tree = renderer
    .create(
      people.map((person) => (
        <SingleQuote
          key={person.id}
          photo={person.photo}
          quote={person.quote}
          job={person.job}
        />
      ))
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
