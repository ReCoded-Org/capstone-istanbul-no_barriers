import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

const SingleQuote = ({ photo, quote, job }) => {
  const { t } = useTranslation();

  return (
    <div className="quotesQuoteBox">
      <q className="quote">{t(quote)}</q>
      <img src={photo} alt="person" className="quotesImg" />
      <p>{t(job)}</p>
    </div>
  );
};

export default SingleQuote;
