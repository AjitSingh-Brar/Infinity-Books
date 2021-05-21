import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search__section">
        <span>Once you learn to read, you will be forever free</span>
        <div className="search__input"></div>
        <div className="search__button">Search</div>
      </div>
      <div className="search__image"></div>
    </div>
  );
};

export default Search;
