import React from "react";
import { Table, Button } from "react-bootstrap";
import allNgos from "./allNgos";
import "./index.css";

// This renders the NGOs which are filtered or searched
// It renders all NGOs by default if a parameter is not given
const NgoList = ({ ngos = allNgos }) => {
  return (
    <div>
      <Table className="table-borderless">
        <thead>
          <tr>
            <th scope="col">&nbsp;</th>
            <th scope="col">NGO Name</th>
            <th scope="col">Service</th>
            <th scope="col">City</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {ngos.map((ngo, index) => {
            if (index % 2 === 0) {
              return (
                <tr className="table-light" key={ngo.name}>
                  <td className="d-table-cell align-middle">
                    <img src={ngo.image} alt="NGO Logo" className="ngoLogo" />
                  </td>
                  <td className="d-table-cell align-middle">{ngo.name}</td>
                  <td className="d-table-cell align-middle">{ngo.service}</td>
                  <td className="d-table-cell align-middle">{ngo.city}</td>
                  <td className="d-table-cell align-middle">{ngo.rating}</td>
                  <td className="d-table-cell align-middle">
                    <Button>Details</Button>
                  </td>
                </tr>
              );
            }
            return (
              <tr className="table-info" key={ngo.name}>
                <td className="d-table-cell align-middle">
                  <img src={ngo.image} alt="NGO Logo" className="ngoLogo" />
                </td>
                <td className="d-table-cell align-middle">{ngo.name}</td>
                <td className="d-table-cell align-middle">{ngo.service}</td>
                <td className="d-table-cell align-middle">{ngo.city}</td>
                <td className="d-table-cell align-middle">{ngo.rating}</td>
                <td className="d-table-cell align-middle">
                  <Button>Details</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default NgoList;
