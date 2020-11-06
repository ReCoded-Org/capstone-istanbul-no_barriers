import React from "react";
import { Table } from "react-bootstrap";
import allNgos from "./allNgos";
import "./index.css";
import NgoTableRow from "../NgoTableRow";

// This renders the NGOs which are filtered or searched
// It renders all NGOs by default if a parameter is not given
const NgoList = ({ ngos = allNgos }) => {
  return (
    <div className="ngoList">
      <Table className="table-borderless ngoListTable">
        <thead>
          <tr>
            <th scope="col" className="logoCol">
              &nbsp;
            </th>
            <th scope="col">NGO Name</th>
            <th scope="col">Service</th>
            <th scope="col">City</th>
            <th scope="col">Rating</th>
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
