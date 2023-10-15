import React from "react";
import cl from "./cards.module.scss";

function Cards() {
  return (
    <div className={cl.cards}>
      <div className={cl.item}>
        <div className={cl.rating}>10</div>
        <img src="/Term.jpg" alt="movie" />
        <div className={cl.text}>
          <div className={cl.title}>Terminator</div>
          <div className={cl.description}>Action, Fantastic</div>
        </div>
      </div>
      <div className={cl.item}>
        <div className={cl.rating}>10</div>
        <img src="/termi.jpg" alt="movie" />
        <div className={cl.text}>
          <div className={cl.title}>Terminator</div>
          <div className={cl.description}>Action, Fantastic</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
