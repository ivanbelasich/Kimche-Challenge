import React from "react";

export const Languages = ({ languagesNames, countriesList }) => {
  return (
    <div>
      {" "}
      {languagesNames.map((language) => (
        <div key={language}>
          <h2 className="continent-title" key={language}>
            {language}
          </h2>
          <div className="cards-container">
            {countriesList.map((country) =>
              country.languages.find((lang) => lang.name === language) ? (
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
                      <div className="card-title">Continent: </div>
                      {country.continent.name}
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
