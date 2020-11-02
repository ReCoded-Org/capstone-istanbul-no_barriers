import React from "react";
import { Container, Button } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div className="globalSearch">
      <Container>
        <h1>{t("resources.searchBar.searchTitle")}</h1>
        <div className="searchBar d-flex">
          <input
            className="searchBarInput flex-grow-1"
            type="text"
            placeholder={t("resources.searchBar.inputPlaceholder")}
            maxLength="15"
          />
          <Button className="searchBarButton shadow-none">
            {t("resources.searchBar.searchButton")}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
