import React from "react";
import renderer from "react-test-renderer";

const selectedOptions = ["ankara", "istanbul"];

it("SelectedFilterOptionList renders correctly", () => {
  const tree = renderer
    .create(
      selectedOptions.map((option, index) => {
        if (index % 2 === 0) {
          return (
            <div className="selectedOption d-flex justify-content-between backgroundLight">
              <p className="selectedOptionTitle">{option}</p>
              <span className="selectedOptionDelete">X</span>
            </div>
          );
        }
        return (
          <div className="selectedOption d-flex justify-content-between backgroundDark">
            <p className="selectedOptionTitle">{option}</p>
            <span className="selectedOptionDelete">X</span>
          </div>
        );
      })
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
