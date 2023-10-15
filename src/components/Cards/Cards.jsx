import React, {useContext, useEffect} from "react";
import cl from "./cards.module.scss";
import {CustomContext} from "../../utils/Context";
import Button from "../button/Button";
import axios from "axios";

function Cards({desc = true}) {
  const [bottomDesc, setBottomDesc] = React.useState(desc);
  const {filmsData, receivingData} = useContext(CustomContext);
  const [paginateCount, setPaginateCount] = React.useState(1);
  const [length, setLength] = React.useState(0);
  const nextPage = () => {
    if (paginateCount < Math.ceil(length / 20)) {
      setPaginateCount((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (paginateCount >= 2) {
      setPaginateCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    receivingData(paginateCount);
    axios
      .get(`http://localhost:3002/films`)
      .then((res) => setLength(res.data.length));
  }, [paginateCount]);

  return (
    <>
      <div className={cl.pagination}>
        <Button disabled={paginateCount < 2 && true} onClick={prevPage}>
          Prev
        </Button>
        <p className={cl.page}>
          {paginateCount}/{Math.ceil(length / 20)}
        </p>
        <Button disabled={paginateCount == Math.ceil(length / 20) && true} onClick={nextPage}>Next</Button>
      </div>
      <div className={cl.cards}>
        {filmsData.map((item) => (
          <div key={item.href} className={cl.item}>
            <div className={cl.rating}>10</div>
            <img src={item.thumbnail} alt="movie" />
            {bottomDesc && (
              <div className={cl.text}>
                <div className={cl.title}>{item.title}</div>
                <div className={cl.genre}>{item.genres}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={cl.pagination}>
        <Button disabled={paginateCount < 2 && true} onClick={prevPage}>
          Prev
        </Button>
        <p className={cl.page}>
          {paginateCount}/{Math.ceil(length / 20)}
        </p>
        <Button disabled={paginateCount == Math.ceil(length / 20) && true} onClick={nextPage}>Next</Button>
      </div>
    </>
  );
}

export default Cards;
