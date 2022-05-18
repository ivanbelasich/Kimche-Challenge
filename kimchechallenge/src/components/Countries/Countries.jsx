import React from "react";
import { Continents } from "../Continents/Continents";
import { Languages } from "../Languages/Languages";
import "./Countries.css";

export const Countries = ({ countries, groupBy, input }) => {
  let countriesList = countries.filter((country) =>
    country.name.toLowerCase().includes(input?.toLowerCase())
  );

  let continentNamesRepeated = countriesList.map(
    (country) => country.continent.name
  );

  let continentNames = continentNamesRepeated.filter((item, index) => {
    return continentNamesRepeated.indexOf(item) === index;
  });

  let languagesNames = [];
  countriesList.forEach((country) =>
    country.languages.forEach((language) =>
      !languagesNames.includes(language.name)
        ? languagesNames.push(language.name)
        : null
    )
  );

  if (groupBy === "continents") {
    return (
      <Continents
        continentNames={continentNames}
        countriesList={countriesList}
      />
    );
  } else {
    return (
      <Languages
        languagesNames={languagesNames}
        countriesList={countriesList}
      />
    );
  }
};
