import React from "react";
import renderer from "react-test-renderer";
import EditProfile from "./index";
import profilePic from "../PersonalInformation/profile.jpg";

it("EditProfile renders correctly", () => {
  let info = {
    profilePicSource: profilePic,
    name: "IBO (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    email: "aish@aaa.com",
    phoneNum: "+900000",
    bio:
      "Vestibulum elementum felis magna, sit amet ullamcorper nunc viverra sed. Morbi at est id quam consequat aliquam. Morbi congue tellus quis nisl porta, in varius urna euismod. Aliquam at ligula diam. Fusce accumsan posuere venenatis. Nullam at lacus id diam iaculis finibus nec sed purus. Curabitur eget interdum turpis. Suspendisse pellentesque accumsan mattis. Nullam laoreet dictum metus nec vestibulum. Nulla ac libero a erat vehicula ullamcorper. Phasellus hendrerit mi at leo molestie, nec iaculis tellus suscipit. Vestibulum imperdiet bibendum urna sed condimentum. Sed eu libero nec ex pretium ullamcorper. Vivamus pellentesque leo ipsum, iaculis viverra nunc malesuada ut. Nullam volutpat, ipsum non mollis semper, tortor magna pretium mauris, quis tincidunt arcu lacus vitae diam. Etiam quis augue non libero tristique pellentesque sed quis urna. Proin in porttitor sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque porttitor commodo erat nec aliquam. Phasellus hendrerit, urna a congue iaculis, nulla leo posuere nulla, vel accumsan nunc nulla at magna.",
  };
  const setInfo = (newInfo) => (info = newInfo);
  let showEditModal = false;
  const setShowEditModal = (newState) => (showEditModal = newState);

  const tree = renderer
    .create(
      <EditProfile
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
        info={info}
        setInfo={setInfo}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
