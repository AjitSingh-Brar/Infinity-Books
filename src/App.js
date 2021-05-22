import React from "react";

import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Trending from "./components/Trending";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchList from "./components/SearchList";
import Book from "./components/Book";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/searchlist">
            <SearchList />
            <Book />
            <Book />
            {/* <Book />
            <Book /> */}
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
