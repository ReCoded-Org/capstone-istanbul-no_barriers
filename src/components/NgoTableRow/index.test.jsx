import React from "react";
import renderer from "react-test-renderer";
import NgoTableRow from "./index";
import allNgos from "../NgoList/allNgos";

it("NgoTableRow renders correctly", () => {
  const tree = renderer
    .create(
      allNgos.map((ngo, index) => {
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
      })
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
