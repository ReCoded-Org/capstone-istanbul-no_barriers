const city = { filterName: "City", filterParameters: ["ankara", "istanbul"] };
const ngoName = { filterName: "NGO Name", filterParameters: ["teng", "abc"] };
const sector = {
  filterName: "Sector",
  filterParameters: ["healthcare", "education"],
};
const rating = { filterName: "Rating", filterParameters: [1, 2, 3, 4, 5] };

// Advance filters are fetched from Database
const filters = [city, ngoName, sector, rating];

export default filters;
