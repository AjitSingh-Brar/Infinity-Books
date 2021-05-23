import React from "react";
import "./Book.css";

const Book = ({ id, bookTitle, bookCover, authorName, publishedDate }) => {
  return (
    <div className="book">
      <div className="book__wrapContent">
        <div className="book__wrap">
          <img src={bookCover} />
        </div>
        <div className="book__wrapInfo">
          <h4>{bookTitle}</h4>
          <p>Author: {authorName}</p>
          <p className="book__publishDate">Published: {publishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
