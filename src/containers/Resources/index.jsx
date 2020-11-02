import React from "react";
import SearchBar from "../../components/SearchBar";
import NgoList from "../../components/NgoList";
import AdvanceFilters from "../../components/AdvanceFilters";
import PagesList from "../../components/PagesList";

const Resources = () => {
  return (
    <div>
      <SearchBar />
      <div className="coreFunctionalities">
        <AdvanceFilters />
        <NgoList />
      </div>
      <PagesList />
    </div>
  );
};

export default Resources;
