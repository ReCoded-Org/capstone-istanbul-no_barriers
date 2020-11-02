import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SingleQuote from "../SingleQuote";
import people from "./people";
import "./index.css";

const Quotes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="quotes">
      <Container>
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
        >
          {people.map((person) => (
            <SingleQuote
              key={person.id}
              photo={person.photo}
              quote={person.quote}
              job={person.job}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Quotes;
