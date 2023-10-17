import React, {useContext, useState} from "react";

import Header from "./Header/Header";
import HomePage from "../Pages/homePage/HomePage";
import MoviePage from "../Pages/moviePage/moviePage";
import Footer from "./Footer/Footer";
import "./app.css";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
