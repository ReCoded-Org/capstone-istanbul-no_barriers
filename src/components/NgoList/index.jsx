import React, { useState } from "react";
import { Row, Col, Table, Button, Container } from "react-bootstrap";
import allNgos from "./allNgos";
import "./index.css";
import NgoDetails from "../NgoDetails";

// This renders the NGOs which are filtered or searched
// It renders all NGOs by default if a parameter is not given
const NgoList = ({ ngos = allNgos }) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div>
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
                <>
                  <tr className="table-light" key={ngo.id}>
                    <td className="d-table-cell align-middle">
                      <img
                        src={ngo.image}
                        alt="NGO Logo"
                        className="ngoLogo"
                        align="right"
                      />
                    </td>
                    <td className="d-table-cell align-middle">{ngo.name}</td>
                    <td className="d-table-cell align-middle">{ngo.service}</td>
                    <td className="d-table-cell align-middle">{ngo.city}</td>
                    <td className="d-table-cell align-middle">{ngo.rating}</td>
                    <td className="d-table-cell align-middle btnCol">
                      <Button
                        onClick={() => setOpenDetails(!openDetails)}
                        aria-controls={`${ngo.id}`}
                      >
                        Details
                      </Button>
                    </td>
                  </tr>
                  {openDetails ? (
                    <tr className="table-light">
                      <td>&nbsp;</td>
                      <td className="ngoDetails" id={`${ngo.id}`} colSpan="3">
                        <NgoDetails details={ngo.details} />
                      </td>
                    </tr>
                  ) : null}
                </>
              );
            }
            return (
              <>
                <tr className="table-info" key={ngo.id}>
                  <td className="d-table-cell align-middle">
                    <img
                      src={ngo.image}
                      alt="NGO Logo"
                      className="ngoLogo"
                      align="right"
                    />
                  </td>
                  <td className="d-table-cell align-middle">{ngo.name}</td>
                  <td className="d-table-cell align-middle">{ngo.service}</td>
                  <td className="d-table-cell align-middle">{ngo.city}</td>
                  <td className="d-table-cell align-middle">{ngo.rating}</td>
                  <td className="d-table-cell align-middle btnCol">
                    <Button
                      onClick={() => setOpenDetails(!openDetails)}
                      aria-controls={`${ngo.id}`}
                    >
                      Details
                    </Button>
                  </td>
                </tr>
                {openDetails ? (
                  <tr className="table-info">
                    <td>&nbsp;</td>
                    <td className="ngoDetails" id={`${ngo.id}`} colSpan="3">
                      <NgoDetails details={ngo.details} />
                    </td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default NgoList;
