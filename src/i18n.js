import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arTranslation from "./locales/ar.json";
import trTranslation from "./locales/tr.json";
import enTranslation from "./locales/en.json";

// import Backend from 'i18next-xhr-backend';

// not like to use this?
// have a look at the Quick start guide for passing in lng and translations on init

i18n
  // load translation using xhr -> see /public/locales
  // (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      ar: {
        translation: arTranslation,
      },
      tr: {
        translation: trTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: "en",
    fallbackLng: ["ar", "tr"],
    debug: true,

    keySeparator: ".",
    nsSeparator: "|", // changed from ':' to allow colons in translated text

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
