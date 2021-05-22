import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search__section">
        <span>Once you learn to read, you will be forever free</span>
        <div className="search__input">
          <div className="search__inputSection">
            <input
              type="text"
              placeholder="Find your books here"
              className="search__inputBox"
            />
          </div>
          <div className="search__button">Search</div>
        </div>
      </div>
      <div className="search__imageBackground">
        <img src="./images/bookBackground.jpg" />
      </div>
    </div>
  );
};

export default Search;
