import React from "react";
import { Container } from "react-bootstrap";

//Advance filters are fetched from Database
const AdvanceFilters = () => {
  return( 
    <div className="advanceFilters">
      <Container>
        <div className="title">
          <h5>Refine the list with filters</h5>
          <span>?</span>
        </div>
      </Container>
    </div>
  );
};

export default AdvanceFilters;
