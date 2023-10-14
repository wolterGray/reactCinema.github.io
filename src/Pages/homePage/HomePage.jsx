import React from "react";
import cl from "./home.module.scss";
import SwipeSlide from "../../components/SwipeSlide/SwipeSlide";
import Container from "../../components/container/Container";

function HomePage() {
  const slideData = [
    "avengers.jpg",
    "ff9.jpg",
    "spiderM.jpg",
    "gameOf.jpeg",
    "starW.jpeg",
    "backTF.jpeg",
  ];
  return (
    <div className={cl.wrapper}>
      <div className={cl.slider}>
        <SwipeSlide slideData={slideData} />
      </div>
      <Container>
        <div className={cl.filters}>
          <div className={cl.title}>Filters</div>
          <div className={cl.categories}>
            <div className={cl.genres}>Genres</div>
            <div className={cl.year}>Year</div>
            <div className={cl.rating}>Rating</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
