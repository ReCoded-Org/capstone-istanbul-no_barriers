import React from "react";
import { Container, Button } from "react-bootstrap";
import "./index.css";

const SearchBar = () => {
  return (
    <div className="globalSearch">
      <Container>
        <h1>Find the Service you Need</h1>
        <div className="searchBar d-flex">
          <input
            className="searchBarInput flex-grow-1"
            type="text"
            placeholder="Please, enter a search term..."
            maxLength="15"
          />
          <Button className="searchBarButton shadow-none">Search</Button>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
