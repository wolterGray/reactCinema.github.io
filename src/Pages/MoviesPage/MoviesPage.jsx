import React from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/container/Container";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

function MoviesPage() {
  return (
    <>
      <Container>
        <Header />
        <Cards />
      </Container>
      <Footer />
    </>
  );
}

export default MoviesPage;
