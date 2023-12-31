import Header from "./Header/Header";
import HomePage from "../Pages/homePage/HomePage";
import MoviePage from "../Pages/moviePage/moviePage";
import Footer from "./Footer/Footer";
import "./app.css";
import {Route, Routes} from "react-router-dom";
import Loader from "./loader/Loader";
import {CustomContext} from "../utils/Context";
import React from "react";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";

function App() {
  const {load} = React.useContext(CustomContext);
  return (
    <>
      {load && <Loader />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route path={`/movie/*`} element={<MoviePage />} />
        <Route path={`/movies`} element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
