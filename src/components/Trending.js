import React from "react";
import "./Trending.css";

const Trending = () => {
  return (
    <div className="trending">
      <h4>Trending Books</h4>
      <div className="trending__content">
        <div className="trending__wrap">
          <a>
            <img
              src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
              alt="book"
            />
          </a>
        </div>
        <div className="trending__wrap">
          <a>
            <img
              src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
              alt="book"
            />
          </a>
        </div>
        <div className="trending__wrap">
          <a>
            <img
              src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
              alt="book"
            />
          </a>
        </div>
        <div className="trending__wrap">
          <a>
            <img
              src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
              alt="book"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trending;
