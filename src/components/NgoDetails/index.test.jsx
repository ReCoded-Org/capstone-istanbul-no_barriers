import React from "react";
import renderer from "react-test-renderer";
import NgoDetails from "./index";

it("NgoDetails renders correctly", () => {
  const details = {
    facilityName: "abc",
    address: "address",
    serviceDescription: "serviceDescription",
    responsiblePerson: "responsiblePerson",
    phoneNumber: 12344,
    email: "email",
    website: "website",
  };
  const tree = renderer.create(<NgoDetails details={details} />).toJSON();
  expect(tree).toMatchSnapshot();
});
