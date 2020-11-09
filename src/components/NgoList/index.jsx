import React from "react";
import { Table } from "react-bootstrap";
import allNgos from "./allNgos";
import "./index.css";
import NgoTableRow from "../NgoTableRow";
import { useTranslation } from "react-i18next";

// This renders the NGOs which are filtered or searched
// It renders all NGOs by default if a parameter is not given
const NgoList = ({ ngos = allNgos }) => {
  const { t } = useTranslation();

  return (
    <div className="ngoList">
      <Table className="table-borderless ngoListTable">
        <thead>
          <tr>
            <th scope="col" className="logoCol">
              &nbsp;
            </th>
            <th scope="col">{t("resources.AdvancedFilters.ngoName")}</th>
            <th scope="col">{t("resources.AdvancedFilters.service")}</th>
            <th scope="col">{t("resources.AdvancedFilters.city")}</th>
            <th scope="col">{t("resources.AdvancedFilters.rating")}</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {ngos.map((ngo, index) => {
            if (index % 2 === 0) {
              return (
                <NgoTableRow
                  trClassname="table-info"
                  key={ngo.id}
                  image={ngo.image}
                  name={ngo.name}
                  service={ngo.service}
                  city={ngo.city}
                  rating={ngo.rating}
                  details={ngo.details}
                />
              );
            }
            return (
              <NgoTableRow
                trClassname="table-light"
                key={ngo.id}
                image={ngo.image}
                name={ngo.name}
                service={ngo.service}
                city={ngo.city}
                rating={ngo.rating}
                details={ngo.details}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default NgoList;
