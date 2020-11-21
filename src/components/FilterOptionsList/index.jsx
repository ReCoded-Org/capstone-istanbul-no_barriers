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
            key={option}
            onClick={() =>
              setChosenOptions((state) => {
                state[filterCategory].push(option);
              })
            }
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
