import React from "react";
import "./index.css";

// This renders the filter options of a given filter as parameter.
// It is called in AdvancedFilters component
const FilterOptionsList = ({ filter, setChosenOptions, filterCategory }) => {
  return (
    <div className="filterOptionsList">
      {filter.map((option) => {
        return (
          <div
            className="filterOption d-flex align-items-center p-1"
            key={option + (Math.random() * 100 + 1)}
            onClick={() => {
              setChosenOptions((state) => {
                const newState = { ...state };
                newState[filterCategory].push(option);
                return newState;
              });
            }}
          >
            <span className="filterOptionPlusSign">+</span>
            <p className="filterOptionTitle ">{option}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptionsList;
