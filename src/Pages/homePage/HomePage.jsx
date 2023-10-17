import React from "react";
import cl from "./home.module.scss";
import SwipeSlide from "../../components/SwipeSlide/SwipeSlide";
import Container from "../../components/container/Container";
import Category from "../../components/Filter/Filter";
import Cards from "../../components/Cards/Cards";

function HomePage() {
  const slideData = [
    "wenom.jpg",
    "avengeres.jpg",
    "ff9.jpg",
    "starW.jpeg",
    
  ];
  return (
    <div className={cl.wrapper}>
      <Container>
      <div className={cl.slider}>
        <SwipeSlide slideData={slideData} />
      </div>
      
        <Category />
        <Cards  />
      </Container>
    </div>
  );
}

export default HomePage;
