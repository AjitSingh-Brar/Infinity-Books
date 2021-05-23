import React from "react";

import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Trending from "./components/Trending";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchList from "./components/SearchList";
import Book from "./components/Book";
import { useSelector } from "react-redux";
import { selectBookList } from "./slices/bookSlice";

function App() {
  const booksListing = useSelector(selectBookList);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/searchlist">
            <SearchList />
            {booksListing.map((book) =>
              book.cover_i ? (
                <Book
                  key={book.key}
                  bookTitle={book.title}
                  bookCover={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  authorName={book.author_name}
                  publishedDate={
                    book.publish_date ? book.publish_date[0] : " N/A"
                  }
                />
              ) : (
                <Book
                  key={book.key}
                  bookTitle={book.title}
                  bookCover={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`}
                  authorName={book.author_name}
                  publishedDate={
                    book.publish_date ? book.publish_date[0] : " N/A"
                  }
                />
              )
            )}
          </Route>
          <Route path="/category">
            <SearchList />
            {booksListing.map((book) =>
              book.cover_i ? (
                <Book
                  key={book.key}
                  bookTitle={book.title}
                  bookCover={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  authorName={book.author_name}
                  publishedDate={
                    book.publish_date ? book.publish_date[0] : " N/A"
                  }
                />
              ) : (
                <Book
                  key={book.key}
                  bookTitle={book.title}
                  bookCover={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`}
                  authorName={book.author_name}
                  publishedDate={
                    book.publish_date ? book.publish_date[0] : " N/A"
                  }
                />
              )
            )}
          </Route>
          <Route path="/">
            <Search />
            <Trending />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
