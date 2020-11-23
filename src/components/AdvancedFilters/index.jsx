import React, { useState } from "react";
import {
  Container,
  Button,
  Accordion,
  Card,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import "./index.css";
import FilterOptionsList from "../FilterOptionsList";
import SelectedFilterOptionsList from "../SelectedFilterOptionList";
import { useTranslation } from "react-i18next";

const AdvancedFilters = ({
  applyAdvancedFilters,
  filterOptions,
  setFilteredNgos,
}) => {
  const { t } = useTranslation();
  const filters = Object.keys(filterOptions);
  const [chosenOptions, setChosenOptions] = useState({
    cities: [],
    services: [],
    ratings: [],
    location: [],
    names: [],
  });

  const renderChosenOptions = (filter) => {
    Object.keys(filterOptions).map((option) => {
      if (option === filter) {
        return (
          <SelectedFilterOptionsList
            selectedOptions={chosenOptions[option]}
            setChosenOptions={setChosenOptions}
            chosenOptions={chosenOptions}
            chosenOptionsKey={option}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="advancedFilters">
      <Container fluid>
        <div className="advancedFiltersTitleSection d-flex justify-content-between align-items-baseline pb-2">
          <h5 className="advancedFiltersTitle">
            {t("resources.AdvancedFilters.title")}
          </h5>
          <OverlayTrigger
            overlay={
              <Tooltip className="tooltipInfo">
                {t("resources.AdvancedFilters.tooltipInfo")}
              </Tooltip>
            }
          >
            <span className="moreInfoFilters">?</span>
          </OverlayTrigger>
        </div>
        {filters.map((filter) => {
          return (
            <>
              <Accordion key={filter}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <div className="filter d-flex">
                    <div className="circle">
                      <span className="filterPlusSign">+</span>
                    </div>
                    <p className="filterTitle">
                      {t(`resources.AdvancedFilters.${filter}`)}
                    </p>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <FilterOptionsList
                    filter={filterOptions[filter]}
                    setChosenOptions={setChosenOptions}
                    filterCategory={filter}
                  />
                </Accordion.Collapse>
              </Accordion>
              {chosenOptions ? renderChosenOptions(filter) : null}
            </>
          );
        })}
        <div className="filterButtons d-flex justify-content-center align-items-baseline">
          <p className="clearAll" onClick={() => setFilteredNgos([])}>
            {t("resources.AdvancedFilters.clearAll")}
          </p>
          <Button
            className="applyFilters shadow-none"
            onClick={applyAdvancedFilters}
          >
            {t("resources.AdvancedFilters.applyFilters")}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AdvancedFilters;
