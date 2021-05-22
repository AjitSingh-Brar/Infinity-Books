import React from "react";
import "./SearchList.css";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import DateRangeIcon from "@material-ui/icons/DateRange";
const SearchList = () => {
  return (
    <div className="searchList">
      <div className="searchList__alphabetically">
        <SortByAlphaIcon />
        By Alphabetically
      </div>
      <div className="searchList__publishedDate">
        <DateRangeIcon />
        By Published Date
      </div>
    </div>
  );
};

export default SearchList;
