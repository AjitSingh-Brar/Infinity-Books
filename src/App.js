import React from "react";

import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Trending />
    </div>
  );
}

export default App;
