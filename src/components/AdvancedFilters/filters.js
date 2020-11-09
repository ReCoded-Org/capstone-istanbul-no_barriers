import { useTranslation } from "react-i18next";

const { t } = useTranslation();

const filters = [
  {
    filterName: t("resources.AdvancedFilters.city"),
    filterParameters: ["ankara", "istanbul"],
  },
  {
    filterName: t("resources.AdvancedFilters.ngoName"),
    filterParameters: ["teng", "abc"],
  },
  {
    filterName: t("resources.AdvancedFilters.service"),
    filterParameters: ["healthcare", "education"],
  },
  {
    filterName: t("resources.AdvancedFilters.rating"),
    filterParameters: [1, 2, 3, 4, 5],
  },
];

export default filters;
