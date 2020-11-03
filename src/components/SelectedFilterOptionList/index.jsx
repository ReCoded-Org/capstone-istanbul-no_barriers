import React from "react";
import "./index.css";

// This renders the selected filter options of a given state which tracks the selected filter options.
// It is called in AdvancedFilters component
const FilterOptionsList = ({ selectedOptions }) => {
  return (
    <div className="filteredOptionsList">
      {selectedOptions.map((option, index) => {
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
      })}
    </div>
  );
};

export default FilterOptionsList;
