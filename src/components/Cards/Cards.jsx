import React, {useContext, useEffect} from "react";
import cl from "./cards.module.scss";
import {CustomContext} from "../../utils/Context";
import Button from "../button/Button";
import axios from "axios";

function Cards({desc = true}) {
  const {filmsData, receivingData, paginatePage, setPaginatePage, totalCount} =
    useContext(CustomContext);

  const [length, setLength] = React.useState(0);

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

  return (
    <>
      <div className={cl.pagination}>
        <Button disabled={paginatePage < 2 && true} onClick={prevPage}>
          Prev
        </Button>
        <p className={cl.page}>
          {paginatePage} - {Math.ceil(totalCount / 20)}
        </p>
        <Button
          disabled={paginatePage == Math.ceil(totalCount/ 20) && true}
          onClick={nextPage}>
          Next
        </Button>
      </div>
      <div className={cl.cards}>
        {filmsData.map((item) => (
          <div key={item.href} className={cl.item}>
            <div className={cl.rating}>10</div>
            <img src={item.thumbnail} alt="movie" />
            {desc && (
              <div className={cl.text}>
                <div className={cl.title}>{item.title}</div>
                <div className={cl.genre}>{item.genres.join(", ")}</div>
              </div>
            )}
          </div>
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
          disabled={paginatePage == Math.ceil(totalCount/ 20) && true}
          onClick={nextPage}>
          Next
        </Button>
      </div>
    </>
  );
}

export default Cards;
