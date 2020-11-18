import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./index.css";
import team from "./team.js";
import TeamMember from "../TeamMember";
import { useTranslation } from "react-i18next";

const MeetTheTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const { t } = useTranslation();

  return (
    <div className="meetTheTeam">
      <Container>
        <h3 className="title">{t("meetTheTeam.pageTitle")}</h3>
        <br />
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
        >
          {team.map((teamMemberObject) => {
            return (
              <TeamMember
                name={teamMemberObject.name}
                title={teamMemberObject.title}
                avatar={teamMemberObject.avatar}
                github={teamMemberObject.github}
              />
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default MeetTheTeam;
