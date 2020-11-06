import React from "react";
import Pagination from "react-bootstrap";

const PagesList = ({ ngos }) => {
  return (
    <Pagination>
      <Pagination.First />
      {ngos.map((ngo, index) => {
        const pageNumber = index + 1;
        return (
          <Pagination.Item key={pageNumber} active={pageNumber === "active"}>
            {pageNumber}
          </Pagination.Item>
        );
      })}
      <Pagination.Last />
    </Pagination>
  );
};

export default PagesList;
