import React from "react";
import "./index.css";

// It renders the selected filter options of a given state which tracks the selected filter options.
// It is called in AdvancedFilters component

const SelectedFilterOptionsList = ({
  selectedOptions,
  setChosenOptions,
  chosenOptionsKey,
  chosenOptions,
}) => {
  const deleteOption = (option) => {
    const values = chosenOptions[chosenOptionsKey];
    const index = values.indexOf(option);
    if (index > -1) {
      values.splice(index, 1);
    }

    // const key = chosenOptions[chosenOptionsKey];
    setChosenOptions({ key: values });
  };

  return (
    <div className="filteredOptionsList">
      {selectedOptions.map((option, index) => {
        if (index % 2 === 0) {
          return (
            <div
              className="selectedOption d-flex justify-content-between backgroundLight"
              key={option}
            >
              <p className="selectedOptionTitle">{option}</p>
              <span
                className="selectedOptionDelete"
                onClick={() => deleteOption(option)}
              >
                X
              </span>
            </div>
          );
        }
        return (
          <div
            className="selectedOption d-flex justify-content-between backgroundDark"
            key={option}
          >
            <p className="selectedOptionTitle">{option}</p>
            <span className="selectedOptionDelete">X</span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedFilterOptionsList;
