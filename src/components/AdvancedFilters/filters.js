// filterParameters should be fetched from database
const filters = [
  {
    filterName: "resources.AdvancedFilters.city",
    filterParameters: ["ankara", "istanbul"],
  },
  {
    filterName: "resources.AdvancedFilters.ngoName",
    filterParameters: ["teng", "abc"],
  },
  {
    filterName: "resources.AdvancedFilters.service",
    filterParameters: ["healthcare", "education"],
  },
  {
    filterName: "resources.AdvancedFilters.rating",
    filterParameters: [1, 2, 3, 4, 5],
  },
];

export default filters;
