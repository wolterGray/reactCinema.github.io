import React, {useContext, useEffect} from "react";
import cl from "./cards.module.scss";
import {CustomContext} from "../../utils/Context";
import Button from "../button/Button";
import {Link, NavLink} from "react-router-dom";

function Cards() {
  const {
    filmsData,
    paginatePage,
    setPaginatePage,
    totalCount,
    setMoviePageData
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
  const ratingColor = (rating) => {
    if (rating < 6) return "red";
    if (rating >= 6 && rating < 7) return "yellow";
    else return "green";
  };
  return filmsData ? (
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
        {filmsData.map((item,id) => (
          <NavLink
            to={`movie/${item.href}`}
            key={item.href}
            className={cl.item}
            onClick={() => {
              setMoviePageData([item])
            }}>
            <div
              style={{border: `2px solid ${ratingColor(item.average)}`}}
              className={cl.rating}>
              {item.average}
            </div>
            <img src={item.thumbnail} alt={item.title} />
            <div className={cl.text}>
              <div className={cl.title}>{item.title}</div>
              <div className={cl.year}>{item.year}</div>
              <div className={cl.genres}></div>
            </div>
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
