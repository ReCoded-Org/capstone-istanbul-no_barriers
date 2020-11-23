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
    let values = chosenOptions[chosenOptionsKey];
    values = values.filter((value) => value !== option);

    setChosenOptions((state) => {
      return { ...state, [chosenOptionsKey]: values };
    });
  };

  return (
    <div className="filteredOptionsList">
      {selectedOptions &&
        selectedOptions.map((option) => {
          return (
            <div
              className="selectedOption d-flex justify-content-between align-items-baseline backgroundDark"
              key={option + (Math.random() * 100 + 1)}
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
        })}
    </div>
  );
};

export default SelectedFilterOptionsList;
