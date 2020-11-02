import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import Resources from "./containers/Resources";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <HomePage />
        <Resources />
      </div>
    </I18nextProvider>
  );
}

export default App;
