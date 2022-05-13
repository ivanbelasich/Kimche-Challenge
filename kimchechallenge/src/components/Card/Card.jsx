import React from "react";
import "./Card.css";

export default function Card({
  name,
  languages,
  continent,
  emoji,
  currency,
  capital,
}) {
  return (
    <div className="card-container">
      <div className="card-language">{languages}</div>
      <div className="card">
        <div className="card-country">
          <div className="card-title"> {emoji}</div>
          <div className="card-title">{name}</div>
        </div>
        <div className="card-data">
          <div>Currency: {currency}</div>
          <div>Capital: {capital}</div>
          <div>Continent: {continent}</div>
        </div>
      </div>
    </div>
  );
}
