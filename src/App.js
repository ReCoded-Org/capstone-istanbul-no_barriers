import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <HomePage />
      </div>
    </I18nextProvider>
  );
}

export default App;
