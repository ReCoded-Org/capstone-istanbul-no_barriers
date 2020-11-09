import React from "react";
import renderer from "react-test-renderer";
import PagesList from "./index";
import allNgos from "../NgoList/allNgos";

it("PagesList renders correctly", () => {
  const tree = renderer.create(<PagesList ngos={allNgos} />).toJSON();
  expect(tree).toMatchSnapshot();
});
