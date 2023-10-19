import axios from "axios";
import React, {createContext} from "react";

import {API_URL} from "./apiConstants";

export const CustomContext = createContext();

export const MyContext = ({children}) => {
  const [filmsData, setFilmsData] = React.useState([]);
  const [moviePageData, setMoviePageData] = React.useState("");
  const [focusInput, setFocusInput] = React.useState(false);
  const [paginatePage, setPaginatePage] = React.useState(1);
  const [totalCount, setTotalCount] = React.useState(0);
  const [genre, setGenre] = React.useState("");
  const [year, setYear] = React.useState("");
  const [sortingVal, setSortingVal] = React.useState(false);
  const [searchFilm, setSearchFilm] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const ReceivesData = () => {
    setLoad(true);
    axios
      .get(
        `${API_URL}${sortingVal && `_sort=average&_order=desc`}${year && `&year=${year}`}${
          genre && `&genres_like=${genre}`
        }&_limit=20 &_page=${paginatePage}${
          searchFilm && `&title_like=${searchFilm}`
        }`
      )
      .then((res) => {
        setFilmsData(res.data);
        setTotalCount(res.headers["x-total-count"]);

        setLoad(false);
      });
  };

  React.useEffect(() => {
    ReceivesData();
  }, [genre , year , paginatePage,sortingVal ]);

  const value = {
    filmsData,
    ReceivesData,
    paginatePage,
    setPaginatePage,
    setGenre,
    setYear,
    totalCount,
    moviePageData,
    setMoviePageData,
    searchFilm,
    setSearchFilm,
    focusInput,
    setFocusInput,
    setSortingVal,
    load,
  };
  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};

export default MyContext;
