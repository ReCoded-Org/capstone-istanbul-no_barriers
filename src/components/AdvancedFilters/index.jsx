import React from "react";
import {
  Container,
  Button,
  Accordion,
  Card,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import filters from "./filters";
import "./index.css";
import FilterOptionsList from "../FilterOptionsList";

const AdvancedFilters = () => {
  return (
    <div className="advancedFilters">
      <Container>
        <div className="advancedFiltersTitleSection d-flex justify-content-between">
          <h5 className="advancedFiltersTitle">Refine the list with filters</h5>
          <OverlayTrigger
            overlay={
              <Tooltip className="tooltipInfo">
                You can select different filter options by clicking on a filter
                name.
              </Tooltip>
            }
          >
            <span className="moreInfoFilters">?</span>
          </OverlayTrigger>
        </div>
        {filters.map((filter) => {
          return (
            <Accordion key={filter.filterName}>
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
