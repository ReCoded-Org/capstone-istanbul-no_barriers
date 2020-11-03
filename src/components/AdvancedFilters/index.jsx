import React from "react";
import { Container, Button, Accordion, Card } from "react-bootstrap";
import filters from "./filters";
import "./index.css";
import FilterOptionsList from "../FilterOptionsList";

const AdvancedFilters = () => {
  return (
    <div className="advancedFilters">
      <Container>
        <div className="advancedFiltersTitle d-flex justify-content-between">
          <h5>Refine the list with filters</h5>
          <span className="moreInfoFilters">?</span>
        </div>
        {filters.map((filter) => {
          return (
            <Accordion>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div className="filter d-flex">
                  <div className="circle">
                    <span className="filterPlusSign">+</span>
                  </div>
                  <p className="filterTitle">{filter.filterName}</p>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <FilterOptionsList filter={filter} />
              </Accordion.Collapse>
            </Accordion>
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
