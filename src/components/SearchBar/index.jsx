import React from "react";
import { Container, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="globalSearch">
      <Container>
        <h1>Find the Service you Need</h1>
        <div className="searchBar">
          <input
            className="searchBarInput"
            type="text"
            placeholder="Search for a service..."
            maxLength="15"
          />
          <Button className="searchBarButton">Search</Button>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
