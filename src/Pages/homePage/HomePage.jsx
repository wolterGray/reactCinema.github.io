import React from "react";
import cl from "./home.module.scss";
import SwipeSlide from "../../components/SwipeSlide/SwipeSlide";
import Container from "../../components/container/Container";
import Category from "../../components/Filter/Filter";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

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
        <Category />
        <Cards />
      </Container>
      <Footer/>
    </div>
  );
}

export default HomePage;
