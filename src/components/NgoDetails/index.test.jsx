import React from "react";
import renderer from "react-test-renderer";
import NgoDetails from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

it("NgoDetails renders correctly", () => {
  const details = {
    facilityName: "abc",
    address: "address",
    serviceDescription: {
      english: "serviceDescription",
      arabic: "arabic",
      turkish: "türkçe",
    },
    responsiblePerson: "responsiblePerson",
    phoneNumber: 12344,
    email: "email",
    website: "website",
  };
  const tree = renderer
    .create(
      <Provider store={store}>
        <NgoDetails details={details} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
