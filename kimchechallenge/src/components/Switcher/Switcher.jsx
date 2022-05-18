import React from "react";
import "./Switcher.css";

export const Switcher = ({ setGroupBy, groupBy }) => {
  return (
    <div className="switcher-container">
      <div className="switch-title">Group by:</div>
      <button
        className={
          groupBy === "continents" ? "blue-button" : "button-container"
        }
        onClick={() => setGroupBy("continents")}
      >
        Continent
      </button>
      <button
        className={groupBy === "language" ? "blue-button" : "button-container"}
        onClick={() => setGroupBy("language")}
      >
        Language
      </button>
    </div>
  );
};
