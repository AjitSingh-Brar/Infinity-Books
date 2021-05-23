import React from "react";
import "./SearchList.css";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { useDispatch, useSelector } from "react-redux";
import { selectBookList, setBookList } from "../slices/bookSlice";
const SearchList = () => {
  const booksListing = useSelector(selectBookList);
  const dispatch = useDispatch();
  const sortByTitle = () => {
    let booksList;
    booksList = booksListing.slice().sort(function (a, b) {
      var titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase();
      if (titleA < titleB)
        //sort string ascending
        return -1;
      if (titleA > titleB) return 1;
      return 0; //default return value (no sorting)
    });
    console.log(booksList);

    dispatch(setBookList(booksList));
  };

  const sortByDate = () => {
    let booksList;
    booksList = booksListing.slice().sort(function (a, b) {
      var dateA = new Date(a.publish_date),
        dateB = new Date(b.publish_date);
      return dateB - dateA; //sort by date ascending
    });
    dispatch(setBookList(booksList));
  };
  return (
    <div className="searchList">
      <div className="searchList__alphabetically" onClick={sortByTitle}>
        {/* <SortByAlphaIcon /> */}
        By Alphabetically
      </div>
      <div className="searchList__publishedDate" onClick={sortByDate}>
        {/* <DateRangeIcon /> */}
        By Published Date
      </div>
    </div>
  );
};

export default SearchList;
