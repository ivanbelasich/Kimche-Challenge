import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

export const SearchBar = ({ input, setInput }) => {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar-input"
        placeholder="Search a country"
        type="text"
        name="country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <AiOutlineSearch className="search-icon" />
    </div>
  );
};
