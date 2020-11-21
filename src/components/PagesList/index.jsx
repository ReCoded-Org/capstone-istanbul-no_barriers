import React from "react";
import { Pagination } from "react-bootstrap";

const PagesList = ({ ngos }) => {
  const NGOS_PER_PAGE = 10;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(ngos.length / NGOS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pages">
      <Pagination
        className="d-flex justify-content-end pb-5"
        style={{
          backgroundColor: "#eff4f6",
          paddingRight: "6rem",
          paddingTop: "1rem",
          marginBottom: "0",
        }}
      >
        <Pagination.First />
        {pageNumbers.map((currentDisplayedPageNumber, index) => {
          const displayedNumber = index + 1;
          return (
            <Pagination.Item
              key={displayedNumber}
              active={currentDisplayedPageNumber === "active"}
            >
              {currentDisplayedPageNumber}
            </Pagination.Item>
          );
        })}
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default PagesList;
