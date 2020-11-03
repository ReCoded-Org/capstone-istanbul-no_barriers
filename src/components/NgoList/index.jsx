import React from "react";
import { Table, Button } from "react-bootstrap";
import allNgos from "./allNgos";

// This renders the NGOs which are filtered or searched
// It renders all NGOs by defalt if a parameter is not given
const NgoList = ({ ngos = allNgos }) => {
  return (
    <div>
      <Table className="table-borderless">
        <tbody>
          {ngos.map((ngo, index) => {
            if (index % 2 === 0) {
              return (
                <tr className="table-light" key={ngo.name}>
                  <td>
                    <img src={ngo.image} alt="NGO Logo" />
                  </td>
                  <td>{ngo.name}</td>
                  <td>{ngo.service}</td>
                  <td>{ngo.city}</td>
                  <td>{ngo.rating}</td>
                  <td>
                    <Button>Details</Button>
                  </td>
                </tr>
              );
            }
            return (
              <tr className="table-info">
                <th scope="row">{ngo.name}</th>
                <td>{ngo.service}</td>
                <td>{ngo.city}</td>
                <td>{ngo.rating}</td>
                <td>
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
