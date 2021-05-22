import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <div className="book">
      <div className="book__wrapContent">
        <div className="book__wrap">
          <img src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </div>
        <div className="book__wrapInfo">
          <h4>Book of Rings</h4>
          <p>Author: Ajit Singh</p>
          <p>Published: 1982</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
