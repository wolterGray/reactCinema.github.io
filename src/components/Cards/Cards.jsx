import React, {useContext, useEffect} from "react";
import cl from "./cards.module.scss";
import {CustomContext} from "../../utils/Context";
import Button from "../button/Button";
import {Link, NavLink} from "react-router-dom";

function Cards({desc = true}) {
  const {
    filmsData,
    receivingData,
    paginatePage,
    setPaginatePage,
    totalCount,
    localDate,
    moviePageData,
    setMoviePageData,
  } = useContext(CustomContext);

  const nextPage = () => {
    if (paginatePage < Math.ceil(totalCount / 20)) {
      setPaginatePage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (paginatePage >= 2) {
      setPaginatePage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    receivingData();
  }, [paginatePage]);

  return filmsData.length > 0 ? (
    <>
      <div className={cl.pagination}>
        <Button disabled={paginatePage < 2 && true} onClick={prevPage}>
          Prev
        </Button>
        <p className={cl.page}>
          {paginatePage} - {Math.ceil(totalCount / 20)}
        </p>
        <Button
          disabled={paginatePage == Math.ceil(totalCount / 20) && true}
          onClick={nextPage}>
          Next
        </Button>
      </div>
      <div className={cl.cards}>
        {filmsData.map((item) => (
          <NavLink
            to="/movie"
            key={item.href}
            className={cl.item}
            onClick={() => {
             localStorage.setItem("filmData", JSON.stringify(item));
             setMoviePageData([item])
            }}>
            <div className={cl.rating}>10</div>
            <img src={item.thumbnail} alt="movie" />
            {desc && (
              <div className={cl.text}>
                <div className={cl.title}>{item.title}</div>
                <div className={cl.year}>{item.year}</div>
                <div className={cl.genre}>{item.genres.join(", ")}</div>
              </div>
            )}
          </NavLink>
        ))}
      </div>
      <div className={cl.pagination}>
        <Button disabled={paginatePage < 2 && true} onClick={prevPage}>
          Prev
        </Button>
        <p className={cl.page}>
          {paginatePage} - {Math.ceil(totalCount / 20)}
        </p>
        <Button
          disabled={paginatePage == Math.ceil(totalCount / 20) && true}
          onClick={nextPage}>
          Next
        </Button>
      </div>
    </>
  ) : (
    <div className={cl.notFound}>
      No films were found for the selected request.
    </div>
  );
}

export default Cards;
