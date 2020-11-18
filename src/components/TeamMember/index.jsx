import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({ avatar, name, title, github }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col className="avatar" sm={4}>
          <img alt="member" src={avatar} />
        </Col>
        <Col className="profileInfo" sm={8}>
          <h5>{name}</h5>
          <div>{t(title)}</div>
          <div className="gitHubIcon">
            <a href={github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamMember;
