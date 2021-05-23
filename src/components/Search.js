import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectBookList, setBookList } from "../slices/bookSlice";
import "./Search.css";

const Search = () => {
  const [bookTitle, setBookTitle] = useState("");
  const booksListing = useSelector(selectBookList);
  const history = useHistory();

  const dispatch = useDispatch();
  const URL = "http://openlibrary.org/search.json";
  const FINAL_URL = `${URL}?q=${bookTitle}`;

  const searchBooks = () => {
    fetch(FINAL_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.docs);
        dispatch(setBookList(data.docs));
      });

    history.push("/searchlist");
  };
  console.log(booksListing);
  console.log(bookTitle);
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
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
          </div>
          <div className="search__button" onClick={searchBooks}>
            Search
          </div>
        </div>
      </div>
      <div className="search__imageBackground">
        <img src="./images/bookBackground.jpg" />
      </div>
    </div>
  );
};

export default Search;
