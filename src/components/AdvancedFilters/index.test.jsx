import React from "react";
import renderer from "react-test-renderer";
import AdvancedFilters from "./index";

const ngos = [
  { city: "Ankara", service: "education", name: "ABC", rating: "1" },
];
const filteredNgos = [];
const setFilteredNgos = (ngos) => filteredNgos.push(ngos);
const filterOptions = {};

// Advance Filters component's functionalities - START
const applyAdvancedFilters = (filterOptions, ngos, setFilteredNgos) => {
  setFilteredNgos([]);
  for (let i = 0; i < ngos.length; i++) {
    const isAllOptionsIncluded =
      filterOptions.cities.includes(ngos[i].city) &&
      filterOptions.services.includes(ngos[i].service) &&
      filterOptions.names.includes(ngos[i].name) &&
      filterOptions.ratings.includes(ngos[i].rating);

    if (isAllOptionsIncluded) {
      setFilteredNgos((prevState) => [...prevState, ngos[i]]);
    }
  }
};

it("AdvancedFilters renders correctly", () => {
  const tree = renderer
    .create(
      <AdvancedFilters
        applyAdvancedFilters={() =>
          applyAdvancedFilters(filterOptions, ngos, setFilteredNgos)
        }
        filterOptions={filterOptions}
        setFilteredNgos={setFilteredNgos}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
