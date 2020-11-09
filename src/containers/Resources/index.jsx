import React from "react";
import SearchBar from "../../components/SearchBar";
import NgoList from "../../components/NgoList";
import AdvancedFilters from "../../components/AdvancedFilters";
import PagesList from "../../components/PagesList";

const Resources = () => {
  return (
    <div>
      <SearchBar />
      <div className="d-flex">
        <AdvancedFilters />
        <NgoList />
      </div>
      <PagesList />
    </div>
  );
};

export default Resources;
