import React from "react";

// This renders the filter options of a given filter as parameter.
// It is called in AdvancedFilters component
const FilterOptionsList = ({ filter }) => {
  return (
    <div className="filterOptionsList">
      {filter.filterParameters.map((option) => {
        return (
          <div className="filterOption d-flex">
            <span className="filterOptionPlusSign">+</span>
            <p className="filterOptionTitle">{option}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptionsList;
