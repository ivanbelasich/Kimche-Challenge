import React from "react";
import "./Switcher.css";

export const Switcher = ({ title, setTitle }) => {
  function selectContinent() {
    if (title === "language") setTitle("continent");
  }

  function selectLanguage() {
    if (title === "continent") setTitle("language");
  }
  return (
    <div className="switcher-container">
      <div className="switch-title">Group by:</div>
      <div className="button-container">
        <button
          className={title === "continent" ? "blue-button" : "button-container"}
          onClick={selectContinent}
        >
          Continent
        </button>
        <button
          className={title === "language" ? "blue-button" : "button-container"}
          onClick={selectLanguage}
        >
          Language
        </button>
      </div>
    </div>
  );
};
