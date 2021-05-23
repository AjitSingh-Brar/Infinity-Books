import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setBookList } from "../slices/bookSlice";
import "./Trending.css";

const Trending = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const URL = "https://openlibrary.org/search.json";

  const bookbyCategory = (category) => {
    const FINAL_URL = `${URL}?q=${category}`;
    fetch(FINAL_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setBookList(data.docs));
      });
    history.push("/category");
  };

  return (
    <div className="trending">
      <h4>Categories</h4>
      <div className="trending__content">
        <div
          className="trending__wrap"
          onClick={() => bookbyCategory("science")}
        >
          <a>
            <img
              src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="science"
            />
            <span>Science</span>
          </a>
        </div>
        <div
          className="trending__wrap"
          onClick={() => bookbyCategory("sports")}
          value="sports"
        >
          <a>
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="sports"
            />
            <span>Sports</span>
          </a>
        </div>
        <div
          className="trending__wrap"
          onClick={() => bookbyCategory("nature")}
        >
          <a>
            <img
              src="https://images.unsplash.com/photo-1563950708942-db5d9dcca7a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="nature"
            />
            <span>Nature</span>
          </a>
        </div>
        <div
          className="trending__wrap"
          onClick={() => bookbyCategory("electronics")}
        >
          <a>
            <img
              src="https://images.unsplash.com/photo-1588459460688-561668329db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="electronics"
            />
            <span>Electronics</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trending;
