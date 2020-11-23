import React from "react";
import { Container } from "react-bootstrap";
import SingleFeature from "../SingleFeature";
import contents from "./contents";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <Container>
      {contents.map((content, index) => {
        if (index % 2 === 0) {
          return (
            <SingleFeature
              src={content.src}
              title={t(content.title)}
              styling={content.styling}
              alt={content.alt}
              key={content.alt}
              order="first"
            />
          );
        } else {
          return (
            <SingleFeature
              src={content.src}
              title={t(content.title)}
              styling={content.styling}
              alt={content.alt}
              key={content.alt}
              order="last"
            />
          );
        }
      })}
    </Container>
  );
};

export default Features;
