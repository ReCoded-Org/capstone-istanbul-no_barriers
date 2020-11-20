import React, { useState } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "./index.css";
import profilePic from "./profile.jpg";
import { useTranslation } from "react-i18next";
import EditProfile from "../EditProfile";

const PersonalInformation = () => {
  const { t } = useTranslation();

  // info state-profile pic should the same from blog
  // name and email should be the same for the user sign Up info
  // bio should be different according to each language
  const [info, setInfo] = useState({
    profilePicSource: profilePic,
    name: "IBO (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    email: "aish@aaa.com",
    phoneNum: "+900000",
    bio:
      "Vestibulum elementum felis magna, sit amet ullamcorper nunc viverra sed. Morbi at est id quam consequat aliquam. Morbi congue tellus quis nisl porta, in varius urna euismod. Aliquam at ligula diam. Fusce accumsan posuere venenatis. Nullam at lacus id diam iaculis finibus nec sed purus. Curabitur eget interdum turpis. Suspendisse pellentesque accumsan mattis. Nullam laoreet dictum metus nec vestibulum. Nulla ac libero a erat vehicula ullamcorper. Phasellus hendrerit mi at leo molestie, nec iaculis tellus suscipit. Vestibulum imperdiet bibendum urna sed condimentum. Sed eu libero nec ex pretium ullamcorper. Vivamus pellentesque leo ipsum, iaculis viverra nunc malesuada ut. Nullam volutpat, ipsum non mollis semper, tortor magna pretium mauris, quis tincidunt arcu lacus vitae diam. Etiam quis augue non libero tristique pellentesque sed quis urna. Proin in porttitor sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque porttitor commodo erat nec aliquam. Phasellus hendrerit, urna a congue iaculis, nulla leo posuere nulla, vel accumsan nunc nulla at magna.",
  });
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="mx-5 px-5">
      <Row>
        <Button
          className="editProfile shadow-none"
          onClick={() => setShowEditModal(true)}
        >
          {t("profile.editProfile")}
        </Button>
        <EditProfile
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
          info={info}
          setInfo={setInfo}
        />
      </Row>
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center mb-5">
            <Image
              src={info.profilePicSource}
              alt="person"
              roundedCircle
              fluid
              className="profilePic mr-5"
            />
            <div>
              <h2 className="profileName">{info.name}</h2>
              <h5 className="pt-2">{t("profile.contactInfo")}</h5>
              <div className="d-flex">
                <p className="pr-3">
                  {t("profile.email")}
                  &nbsp;
                  {info.email}
                </p>
                <p>
                  {t("profile.phone")}
                  &nbsp;
                  {info.phoneNum}
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="bio align-items-center flex-column">
        <h2>{t("profile.bioTitle")}</h2>
        <p>{info.bio}</p>
      </Row>
    </div>
  );
};

export default PersonalInformation;
