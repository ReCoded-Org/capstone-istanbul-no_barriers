import React from "react";
import { Container } from "react-bootstrap";
import filters from "./filters";

const AdvanceFilters = () => {
  return (
    <div className="advanceFilters">
      <Container>
        <div className="title">
          <h5>Refine the list with filters</h5>
          <span>?</span>
        </div>
        {filters.map((filter) => {
          return (
            <p>
              <span>+</span>
              {filter.filterName}
            </p>
          );
        })}
      </Container>
    </div>
  );
};

export default AdvanceFilters;
