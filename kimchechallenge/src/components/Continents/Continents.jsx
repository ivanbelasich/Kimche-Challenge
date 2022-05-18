import React from "react";

export const Continents = ({ continentNames, countriesList }) => {
  return (
    <div>
      {continentNames.map((continent) => (
        <div key={continent}>
          <h2 className="continent-title" key={continent}>
            {continent}
          </h2>
          <div className="cards-container">
            {countriesList.map((country) =>
              country.continent.name === continent ? (
                <div key={country.code} className="card">
                  <h4>
                    {country.emoji} {country.name}
                  </h4>
                  <hr />
                  <div className="card-info">
                    <div className="card-titles">
                      <div className="card-title">Capital:</div>{" "}
                      {country.capital}
                    </div>
                    <div className="card-titles">
                      <div className="card-title">Currency:</div>{" "}
                      {country.currency}
                    </div>
                    <div className="card-titles">
                      <div className="card-title">Languages:</div>
                      {country.languages.length === 1
                        ? country.languages.map((el) => el.name)
                        : country.languages.map((el) => el.name + ", ")}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
