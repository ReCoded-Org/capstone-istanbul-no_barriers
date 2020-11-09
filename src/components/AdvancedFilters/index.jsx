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
import { useTranslation } from "react-i18next";

const AdvancedFilters = () => {
  const { t } = useTranslation();

  return (
    <div className="advancedFilters">
      <Container>
        <div className="advancedFiltersTitleSection d-flex justify-content-between">
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
          <p className="clearAll">{t("resources.AdvancedFilters.clearAll")}</p>
          <Button className="applyFilters shadow-none">
            {t("resources.AdvancedFilters.applyFilters")}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AdvancedFilters;
