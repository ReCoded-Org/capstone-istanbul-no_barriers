import React from "react";
import { Container, Button } from "react-bootstrap";
import filters from "./filters";
import "./index.css";

const AdvancedFilters = () => {
  return (
    <div className="advanceFilters">
      <Container>
        <div className="advanceFiltersTitle d-flex justify-content-between">
          <h5>Refine the list with filters</h5>
          <span className="moreInfoFilters">?</span>
        </div>
        {filters.map((filter) => {
          return (
            <div>
              <div className="filter d-flex">
                <div className="circle">
                  <span className="filterPlusSign">+</span>
                </div>
                <p className="filterTitle">{filter.filterName}</p>
              </div>
            </div>
          );
        })}
        <div className="filterButtons d-flex justify-content-center align-items-baseline">
          <p className="clearAll">Clear All</p>
          <Button className="applyFilters shadow-none">Apply Filters</Button>
        </div>
      </Container>
    </div>
  );
};

export default AdvancedFilters;
