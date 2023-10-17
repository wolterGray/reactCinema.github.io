import axios from "axios";
import React, {createContext} from "react";

export const CustomContext = createContext();

export const MyContext = ({children}) => {
  const [filmsData, setFilmsData] = React.useState([]);
  const [moviePageData, setMoviePageData] = React.useState([]);
  const [paginatePage, setPaginatePage] = React.useState(1);
  const [totalCount, setTotalCount] = React.useState(0);
  const [genre, setGenre] = React.useState("");
  const [year, setYear] = React.useState("");
  const [searchFilm, setSearchFilm]=React.useState('')
  const receivingData = () => {
    axios
      .get(
        `http://localhost:3002/films?_limit=20&_page=${paginatePage}${
          genre && `&genres_like=${genre}`
        }${year && `&year_like=${year}`}${searchFilm && `&title_like=${searchFilm}`}&_sort=year&_order=desc`
      )
      .then((res) => {
        setFilmsData(res.data);
        setTotalCount(res.headers["x-total-count"]);
      });
  };

  React.useEffect(() => {
    receivingData();
  }, [genre, year,searchFilm]);
  React.useEffect(() => {
    setMoviePageData([JSON.parse(localStorage.getItem("filmData"))] || []);
  }, []);
  const value = {
    filmsData,
    receivingData,
    paginatePage,
    setPaginatePage,
    setGenre,
    setYear,
    totalCount,
    moviePageData,
    setMoviePageData,
    searchFilm,
    setSearchFilm
  };
  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};

export default MyContext;
